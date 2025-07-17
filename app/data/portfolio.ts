// Portfolio data - Casos de éxito específicos para producción
export const portfolioProjects = [
  {
    id: 1,
    title: 'Nanopods',
    category: 'Nanotecnología',
    description: 'Detección inteligente de metales pesados en agua potable usando nanosensores avanzados.',
    shortDescription: 'Nanosensores para agua segura',
    impact: '+1M litros de agua validada',
    roi: '2.5x ROI en 18 meses',
    image: '/images/portfolio/nanopods.jpg',
    tags: ['Nanotecnología', 'Agua', 'IoT'],
    testimonial: {
      quote: "Viretec nos ayudó a validar la tecnología y conectar con inversionistas clave.",
      author: "Dr. Antonio Rodríguez",
      position: "CEO & Founder"
    },
    metrics: {
      funding: "$1.2M Serie A",
      timeline: "14 meses",
      markets: "3 países",
      patents: "2 patentes pendientes"
    },
    featured: true
  },
  {
    id: 2,
    title: 'LifeClip',
    category: 'HealthTech',
    description: 'Dispositivo médico para prevenir la primera causa de muerte materna mundial.',
    shortDescription: 'Salva vidas maternas',
    impact: 'Tecnología patentada',
    roi: 'Esperando Serie A',
    image: '/images/portfolio/lifeclip.jpg',
    tags: ['MedTech', 'Salud Materna', 'Hardware'],
    testimonial: {
      quote: "El modelo de gestión de Viretec transformó nuestro prototipo en un producto comercial.",
      author: "Dra. María González",
      position: "Fundadora"
    },
    metrics: {
      funding: "Prototipo validado",
      timeline: "24 meses desarrollo",
      markets: "Expansión planeada",
      patents: "Patente internacional"
    },
    featured: true
  },
  {
    id: 3,
    title: 'AgriTech IoT',
    category: 'Agricultura Inteligente', 
    description: 'Plataforma IoT para optimización de cultivos y monitoreo de precisión.',
    shortDescription: 'Agricultura de precisión',
    impact: '30% reducción uso de agua',
    roi: '1.8x ROI validado',
    image: '/images/portfolio/agritech.jpg',
    tags: ['IoT', 'Agricultura', 'Sustentabilidad'],
    testimonial: {
      quote: "Escalamos de 10 a 500 hectáreas monitoreadas gracias al programa.",
      author: "Carlos Mendoza",
      position: "Co-founder"
    },
    metrics: {
      funding: "$800K Seed",
      timeline: "12 meses",
      markets: "México y Colombia",
      patents: "Algoritmos propietarios"
    },
    featured: false
  },
  {
    id: 4,
    title: 'EcoEnergy Solutions',
    category: 'Energía Renovable',
    description: 'Sistema inteligente de gestión energética para pequeñas y medianas empresas.',
    shortDescription: 'Energía inteligente',
    impact: '40% reducción costos energéticos',
    roi: '3.2x ROI esperado',
    image: '/images/portfolio/ecoenergy.jpg',
    tags: ['Energía', 'IA', 'Sustentabilidad'],
    testimonial: {
      quote: "El acceso al ecosistema Viretec aceleró nuestra entrada al mercado.",
      author: "Ing. Roberto Silva",
      position: "CTO"
    },
    metrics: {
      funding: "$1.5M Serie A",
      timeline: "16 meses",
      markets: "5 estados",
      patents: "Sistema patentado"
    },
    featured: false
  }
];

// Métricas generales del portfolio
export const portfolioMetrics = {
  totalProjects: "50+",
  activeProjects: "12",
  totalFunding: "$15M+",
  averageROI: "2.8x",
  successRate: "85%",
  averageTimeToMarket: "14 meses"
};

// Categorías para filtrado
export const portfolioCategories = [
  { id: 'all', name: 'Todos los Proyectos', count: portfolioProjects.length },
  { id: 'nanotechnology', name: 'Nanotecnología', count: 1 },
  { id: 'healthtech', name: 'HealthTech', count: 1 },
  { id: 'agritech', name: 'AgriTech', count: 1 },
  { id: 'energy', name: 'Energía', count: 1 }
];