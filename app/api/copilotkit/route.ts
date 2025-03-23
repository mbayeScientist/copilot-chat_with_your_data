import {
  CopilotRuntime,
  LangChainAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime';
import { tavily } from '@tavily/core';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { NextRequest } from 'next/server';

// Configuration de l'adaptateur LangChain avec Gemini
async function getLangChainAdapter() {
  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-2.0-flash",
    maxOutputTokens: 2048,
    temperature: 0.7,
  });

  return new LangChainAdapter({
    chainFn: async ({ messages, tools, threadId }) => {
      // Vérifier si les messages ne sont pas vides
      if (!messages || messages.length === 0) {
        throw new Error("Messages array cannot be empty");
      }

      // Filtrer les messages vides
      const validMessages = messages.filter(msg => {
        if (typeof msg.content === 'string') {
          return msg.content.length > 0;
        }
        if (Array.isArray(msg.content)) {
          return msg.content.length > 0;
        }
        return false;
      });

      if (validMessages.length === 0) {
        throw new Error("No valid messages found after filtering");
      }

      // Configurer le modèle avec les outils
      const modelWithTools = model.bind({
        tools: tools || []
      });

      // Retourner le stream avec les métadonnées
      return modelWithTools.stream(validMessages, {
        metadata: { conversation_id: threadId }
      });
    },
  });
}

const runtime = new CopilotRuntime({
  actions: () => {
    return [
      {
        name: "searchInternet",
        description: "Searches the internet for information.",
        parameters: [
          {
            name: "query",
            type: "string",
            description: "The query to search the internet for.",
            required: true,
          },
        ],
        handler: async ({query}: {query: string}) => {
          const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
          return await tvly.search(query, {max_results: 5});
        },
      },
    ]
  }
});

export const POST = async (req: NextRequest) => {
  const serviceAdapter = await getLangChainAdapter();
  
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};