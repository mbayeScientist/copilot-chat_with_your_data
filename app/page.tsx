"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CustomAssistantMessage } from "../components/AssistantMessage";
import { prompt } from "../lib/prompt";
import { useCopilotReadable } from "@copilotkit/react-core";

export default function Home() {
  useCopilotReadable({
    description: "Current time",
    value: new Date().toLocaleTimeString(),
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow">
        <Dashboard />
      </main>
      <Footer />
      <CopilotSidebar
        instructions={prompt}
        AssistantMessage={CustomAssistantMessage}
        labels={{
          title: "Assistant de Données",
          initial: "Bonjour, je suis là pour vous aider à comprendre vos données. Comment puis-je vous aider ?",
          placeholder: "Posez des questions sur les ventes, tendances ou métriques...",
        }}
      />
    </div>
  );
}
