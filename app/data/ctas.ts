// CTAs optimizados por audiencia - Fácil de editar para producción
export const ctas = {
  hero: {
    primary: {
      text: "Evaluar Proyecto",
      subtitle: "Evaluación gratuita en 48 horas",
      href: "/contacto",
      urgency: true
    },
    secondary: {
      text: "Explora el Ecosistema",
      subtitle: "Descubre oportunidades",
      href: "/ecosistema",
      urgency: false
    }
  },
  
  // CTAs específicos por audiencia
  emprendedores: {
    text: "Agendar Evaluación Gratuita de Proyecto",
    subtitle: "Descubre el potencial de tu innovación según nuestro modelo de gestión",
    href: "/contacto?tipo=emprendedor",
    urgency: true,
    benefit: "Evaluación en 48 horas + Roadmap personalizado"
  },
  
  inversionistas: {
    text: "Acceder a Deal Flow Exclusivo",
    subtitle: "Proyectos evaluados con rentabilidad asegurada y alto impacto",
    href: "/contacto?tipo=inversionista",
    urgency: true,
    benefit: "Acceso inmediato a 20+ oportunidades pre-validadas"
  },
  
  empresas: {
    text: "Resolver Desafíos con Innovación",
    subtitle: "Comparte tus retos, conectamos con quien puede solucionarlos",
    href: "/contacto?tipo=empresa",
    urgency: false,
    benefit: "Consultoría gratuita + propuesta en 7 días"
  },
  
  universidades: {
    text: "Monetizar Propiedad Intelectual",
    subtitle: "Escalamos proyectos innovadores, rentables e impactantes",
    href: "/contacto?tipo=universidad",
    urgency: false,
    benefit: "Evaluación gratuita de portfolio IP"
  }
};

// Mensajes de urgencia y beneficios
export const urgencyMessages = {
  limited: "Solo 5 slots disponibles este mes",
  fast: "Respuesta garantizada en 24 horas",
  exclusive: "Acceso exclusivo para miembros",
  free: "Evaluación completamente gratuita"
};

// Beneficios por servicio
export const benefits = {
  venture_showcase: [
    "Portfolio validado de 50+ proyectos",
    "Métricas de impacto verificadas",
    "Conexión directa con fundadores"
  ],
  venture_lab: [
    "Metodología probada en 200+ proyectos",
    "Mentoría de expertos sectoriales",
    "Validación de mercado acelerada"
  ],
  venture_building: [
    "Escalamiento en 18 meses promedio",
    "Acceso a capital pre-negociado",
    "Equipo técnico especializado"
  ],
  venture_capital: [
    "ROI promedio 3.5x en 24 meses",
    "Due diligence profesional",
    "Co-inversión con fondos líderes"
  ]
};