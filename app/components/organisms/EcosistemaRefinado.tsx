// =====================================================================
// ECOSISTEMA REFINADO - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Section, SectionHeader, Card, Button, Heading, Text } from '@/app/components/ui/ComponentesBase'

// === ECOSISTEMA REFINADO VIRETEC 2025 ===

// Datos del ecosistema optimizados
const ecosystemServices = [
  {
    title: 'Venture Lab',
    subtitle: 'Para Innovadores',
    description: 'Validación técnica y de mercado. Transformamos ideas y propiedad intelectual en oportunidades reales de negocio.',
    features: ['Due diligence técnico', 'Análisis de mercado', 'Protección IP'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-blue-viretec/20 to-blue-oceano/10',
    metrics: { value: '25+', label: 'Ideas Validadas' }
  },
  {
    title: 'Venture Showcase',
    subtitle: 'Para Inversionistas',
    description: 'Portafolio curado de startups validadas y listas para escalar, con métricas claras de impacto y retorno.',
    features: ['Oportunidades pre-seleccionadas', 'Métricas verificadas', 'Deal flow exclusivo'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'from-blue-oceano/20 to-blue-viretec/10',
    metrics: { value: '45+', label: 'Startups Activas' }
  },
  {
    title: 'Venture Capital',
    subtitle: 'Para Inversionistas',
    description: 'Gestión inteligente de fondos con enfoque en triple impacto, maximizando retornos financieros y sociales.',
    features: ['Gestión profesional', 'Reportes de impacto', 'Co-inversión estratégica'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    color: 'from-blue-brillante/20 to-blue-oceano/10',
    metrics: { value: '$127M', label: 'Capital Gestionado' }
  },
  {
    title: 'Venture Building',
    subtitle: 'Para Empresas',
    description: 'Innovación corporativa ágil. Ayudamos a empresas establecidas a transformarse digitalmente.',
    features: ['Metodologías ágiles', 'Transformación digital', 'Conexión con startups'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-blue-oceano/20 to-blue-brillante/10',
    metrics: { value: '89%', label: 'Tasa de Éxito' }
  }
]

// Estadísticas del ecosistema
const ecosystemStats = [
  { value: '16', suffix: 'Años', label: 'de Experiencia' },
  { value: '200', suffix: '+', label: 'Proyectos Evaluados' },
  { value: '45', suffix: '+', label: 'Startups Activas' },
  { value: '3,500', suffix: '+', label: 'Empleos Generados' }
]

// Componente de tarjeta de servicio optimizada
const ServiceCard = ({ service, index }: { service: typeof ecosystemServices[0], index: number }) => (
  <Card 
    variant="glass" 
    hover 
    className="relative overflow-hidden group geometric"
    padding="lg"
  >
    {/* Gradiente de fondo */}
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
    
    {/* Contenido */}
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300">
          {service.icon}
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blanco-puro">{service.metrics.value}</div>
          <div className="text-xs text-gris-suave uppercase tracking-wide">{service.metrics.label}</div>
        </div>
      </div>

      {/* Título y subtítulo */}
      <div className="mb-6">
        <div className="text-xs text-blue-brillante uppercase tracking-widest font-medium mb-2">
          {service.subtitle}
        </div>
        <Heading level={3} size="heading" className="mb-4 group-hover:text-blue-cristal transition-colors duration-300">
          {service.title}
        </Heading>
        <Text className="leading-relaxed group-hover:text-blanco-perla transition-colors duration-300">
          {service.description}
        </Text>
      </div>

      {/* Features */}
      <div className="mb-8">
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gris-suave group-hover:text-gris-platino transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-blue-viretec geometric flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button 
        variant="ghost" 
        size="sm" 
        href={`/soluciones/${service.title.toLowerCase().replace(' ', '-')}`}
        className="w-full group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
      >
        Conocer Más
      </Button>
    </div>

    {/* Decoración esquina */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-viretec/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric" />
  </Card>
)

// Componente principal
const EcosistemaRefinado = () => {
  return (
    <Section background="primary" padding="xl" id="ecosistema" className="geometric">
      {/* Header de sección */}
      <SectionHeader
        badge="Nuestro Modelo"
        title="Ecosistema Integrado"
        description="Conectamos cada pieza del rompecabezas: desde la idea hasta el impacto global. Un modelo integral que maximiza el valor en cada etapa del journey innovador."
        align="center"
      />

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {ecosystemServices.map((service, index) => (
          <div
            key={service.title}
            className="fade-in"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>

      {/* Estadísticas del ecosistema */}
      <div className="bg-gradient-to-r from-blue-viretec/10 via-blue-oceano/5 to-blue-viretec/10 border border-blue-viretec/20 p-8 lg:p-12 geometric">
        <div className="text-center mb-12">
          <Heading level={3} size="heading" color="blue" className="mb-4">
            Impacto Medible
          </Heading>
          <Text className="max-w-2xl mx-auto">
            Nuestro ecosistema genera resultados tangibles que trascienden las métricas tradicionales
          </Text>
        </div>

        {/* Grid de estadísticas horizontales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-negro-profundo/30 backdrop-blur-sm border border-blue-viretec/20 p-6 text-center group hover:border-blue-viretec/40 hover:bg-negro-profundo/50 transition-all duration-300 fade-in geometric"
              style={{animationDelay: `${0.8 + index * 0.1}s`}}
            >
              <div className="mb-3">
                <span className="text-2xl lg:text-3xl font-bold text-blanco-puro">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl lg:text-2xl font-bold text-blue-brillante ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-gris-suave uppercase tracking-wide font-medium leading-tight">
                {stat.label}
              </div>
              
              {/* Línea decorativa */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent mt-4 group-hover:via-blue-viretec/60 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 fade-in" style={{animationDelay: '1.2s'}}>
        <Heading level={3} size="heading" className="mb-6">
          ¿Listo para Formar Parte del Ecosistema?
        </Heading>
        <Text size="subtitle" className="mb-8 max-w-2xl mx-auto">
          Ya seas innovador, inversionista o empresa, tenemos el programa perfecto para acelerar tu impacto
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="/contacto"
            className="geometric"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            Conversar con Nosotros
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            href="/ecosistema"
            className="geometric"
          >
            Explorar el Ecosistema
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default EcosistemaRefinado

/*
OPTIMIZACIONES APLICADAS EN HOMOLOGACIÓN:
✅ Colores homologados según guía artística (blue-viretec, blue-brillante, etc.)
✅ Clase 'geometric' aplicada para border-radius: 0 en todos los elementos
✅ Variables CSS de la paleta (blanco-puro, gris-suave, negro-profundo)
✅ Uso consistente de ComponentesBase
✅ Estructura atómica (organisms/EcosistemaRefinado.tsx)

CARACTERÍSTICAS MANTENIDAS:
✅ Grid responsivo y animaciones escalonadas
✅ Cards con glass-effect y hover states
✅ Métricas integradas en cada servicio
✅ Sección de estadísticas horizontales
✅ CTAs con iconos y múltiples variantes
✅ Gradientes y efectos visuales optimizados
*/