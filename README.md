# Dashboard IA avec CopilotKit, Gemini et Tavily

Un tableau de bord interactif avec un assistant IA alimenté par Google Gemini, capable d'analyser vos données et de rechercher des informations sur Internet via Tavily.

## 🚀 Fonctionnalités

- **Assistant IA avec Gemini** : Analyse et répond aux questions sur vos données
- **Recherche Web avec Tavily** : Accès aux informations en temps réel
- **Visualisation de Données** :
  - Aperçu des ventes et profits
  - Performance des produits
  - Distribution par catégories
  - Analyse régionale
  - Données démographiques

## 🛠️ Technologies Utilisées

- [CopilotKit](https://copilotkit.ai) - Framework pour l'assistant IA
- [Google Gemini](https://ai.google.dev/) - Modèle de langage
- [Tavily](https://tavily.com) - API de recherche web
- [Next.js 14](https://nextjs.org) - Framework React
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Recharts](https://recharts.org) - Visualisation de données

## 📦 Installation

1. Clonez le repository :
   ```bash
   git clone [votre-repo]
   cd copilot-chat-with-your-data
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env.local` avec :
   ```env
   GOOGLE_API_KEY=votre_clé_api_gemini
   TAVILY_API_KEY=votre_clé_api_tavily
   ```

4. Lancez le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

## 💡 Utilisation

1. **Visualisation des Données** :
   - Consultez les différents graphiques et métriques
   - Analysez les tendances et performances

2. **Interaction avec l'Assistant** :
   - Posez des questions sur vos données
   - Demandez des analyses spécifiques
   - Recherchez des informations complémentaires

3. **Exemples de Questions** :
   - "Quelles sont les tendances des ventes sur les derniers mois ?"
   - "Quel est le produit le plus vendu ?"
   - "Comparez les performances par région"

## 🔧 Configuration

### Configuration de Gemini

```typescript
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-2.0-flash",
  maxOutputTokens: 2048,
  temperature: 0.7,
});
```

### Configuration de Tavily

```typescript
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
await tvly.search(query, {max_results: 5});
```

## 📊 Structure des Données

Les données sont organisées en plusieurs catégories :
- `salesData` : Données mensuelles des ventes
- `productData` : Performance des produits
- `categoryData` : Distribution par catégorie
- `regionalData` : Ventes par région
- `demographicsData` : Données démographiques

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT.
