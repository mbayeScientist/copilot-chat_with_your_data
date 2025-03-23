// Données de ventes avec des enregistrements mensuels pour l'année passée
export const salesData = [
  {
    date: "Jan 22",
    Ventes: 2890,
    Profit: 2400,
    Dépenses: 490,
    Clients: 145
  },
  {
    date: "Fév 22",
    Ventes: 1890,
    Profit: 1398,
    Dépenses: 492,
    Clients: 112
  },
  {
    date: "Mar 22",
    Ventes: 3890,
    Profit: 2980,
    Dépenses: 910,
    Clients: 194
  },
  {
    date: "Avr 22",
    Ventes: 2890,
    Profit: 2300,
    Dépenses: 590,
    Clients: 156
  },
  {
    date: "Mai 22",
    Ventes: 4890,
    Profit: 3200,
    Dépenses: 1690,
    Clients: 245
  },
  {
    date: "Juin 22",
    Ventes: 3890,
    Profit: 2900,
    Dépenses: 990,
    Clients: 187
  },
  {
    date: "Juil 22",
    Ventes: 4200,
    Profit: 3100,
    Dépenses: 1100,
    Clients: 210
  },
  {
    date: "Aoû 22",
    Ventes: 4500,
    Profit: 3400,
    Dépenses: 1100,
    Clients: 225
  },
  {
    date: "Sep 22",
    Ventes: 5100,
    Profit: 3800,
    Dépenses: 1300,
    Clients: 255
  },
  {
    date: "Oct 22",
    Ventes: 4800,
    Profit: 3600,
    Dépenses: 1200,
    Clients: 240
  },
  {
    date: "Nov 22",
    Ventes: 5500,
    Profit: 4100,
    Dépenses: 1400,
    Clients: 275
  },
  {
    date: "Déc 22",
    Ventes: 6800,
    Profit: 5200,
    Dépenses: 1600,
    Clients: 340
  }
];

// Données de performance des produits
export const productData = [
  {
    name: "Smartphone",
    ventes: 9800
  },
  {
    name: "T-shirt Graphique",
    ventes: 4567
  },
  {
    name: "Lave-vaisselle",
    ventes: 3908
  },
  {
    name: "Mixeur",
    ventes: 2400
  },
  {
    name: "Montre Connectée",
    ventes: 1908
  }
];

// Données de distribution par catégorie
export const categoryData = [
  {
    name: "Électronique",
    value: 35,
    growth: 8.2
  },
  {
    name: "Vêtements",
    value: 25,
    growth: 4.5
  },
  {
    name: "Maison & Cuisine",
    value: 20,
    growth: 12.1
  },
  {
    name: "Autres",
    value: 15,
    growth: -2.3
  },
  {
    name: "Livres",
    value: 5,
    growth: 1.5
  }
];

// Données des ventes régionales
export const regionalData = [
  {
    region: "Amérique du Nord",
    ventes: 42500
  },
  {
    region: "Europe",
    ventes: 29800
  },
  {
    region: "Asie Pacifique",
    ventes: 22400
  },
  {
    region: "Amérique Latine",
    ventes: 9800
  },
  {
    region: "Moyen-Orient & Afrique",
    ventes: 7500
  }
];

// Données démographiques des clients
export const demographicsData = [
  {
    ageGroup: "18-24 ans",
    dépenses: 2100
  },
  {
    ageGroup: "25-34 ans",
    dépenses: 3800
  },
  {
    ageGroup: "35-44 ans",
    dépenses: 4200
  },
  {
    ageGroup: "45-54 ans",
    dépenses: 3600
  },
  {
    ageGroup: "55+ ans",
    dépenses: 2900
  }
];

// Fonctions utilitaires pour le calcul des métriques
export const calculateTotalRevenue = () => {
  return salesData.reduce((total, item) => total + item.Ventes, 0);
};

export const calculateTotalProfit = () => {
  return salesData.reduce((total, item) => total + item.Profit, 0);
};

export const calculateTotalClients = () => {
  return salesData.reduce((total, item) => total + item.Clients, 0);
};

export const calculateConversionRate = () => {
  const totalClients = calculateTotalClients();
  const visitors = totalClients * 8.13; // Supposons 8.13 visiteurs par client
  return ((totalClients / visitors) * 100).toFixed(1) + "%";
};

export const calculateAverageOrderValue = () => {
  const totalRevenue = calculateTotalRevenue();
  const totalClients = calculateTotalClients();
  return (totalRevenue / totalClients).toFixed(2);
};

export const calculateProfitMargin = () => {
  const totalRevenue = calculateTotalRevenue();
  const totalProfit = calculateTotalProfit();
  return ((totalProfit / totalRevenue) * 100).toFixed(1) + "%";
}; 