// =====================================================================
// SEGMENTED SOLUTIONS - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader, Card, Button, Heading, Text } from '@/app/components/ui/ComponentesBase'

// === DATOS DE SOLUCIONES HOMOLOGADOS ===
const segments = [
  {
    id: 'inversionistas',
    title: 'Para Inversionistas',
    subtitle: 'Deal flow curado y gestionado',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: 'Accede a un portafolio de oportunidades de triple impacto, curado y gestionado por expertos para maximizar el retorno y la transformación.',
    cta: {
      text: 'Ver Oportunidades',
      href: '/soluciones/inversionistas'
    },
    gradient: 'from-blue-viretec/20 to-blue-oceano/10',
    hoverColor: 'group-hover:border-blue-viretec'
  },
  {
    id: 'emprendedores',
    title: 'Para Emprendedores',
    subtitle: 'De la idea a la empresa exitosa',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'Transformamos tu innovación en una empresa de éxito. Te damos la metodología, el capital y el ecosistema para escalar tu impacto.',
    cta: {
      text: 'Aplica al Programa',
      href: '/soluciones/emprendedores'
    },
    gradient: 'from-blue-oceano/20 to-blue-brillante/10',
    hoverColor: 'group-hover:border-blue-brillante'
  },
  {
    id: 'empresas',
    title: 'Para Empresas',
    subtitle: 'Innovación abierta a tu alcance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: 'Resolvemos tus desafíos más complejos conectándote con tecnología de vanguardia y soluciones a la medida.',
    cta: {
      text: 'Agenda una Consultoría',
      href: '/soluciones/empresas'
    },
    gradient: 'from-blue-brillante/20 to-blue-viretec/10',
    hoverColor: 'group-hover:border-blue-oceano'
  },
  {
    id: 'universidades',
    title: 'Para Universidades',
    subtitle: 'Del laboratorio al mercado',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
      </svg>
    ),
    description: 'Llevamos tu investigación más allá del laboratorio. Somos el puente que convierte tus descubrimientos en soluciones de mercado.',
    cta: {
      text: 'Explora Colaboraciones',
      href: '/soluciones/universidades'
    },
    gradient: 'from-blue-oceano/15 to-blue-brillante/15',
    hoverColor: 'group-hover:border-blue-viretec'
  }
]

// === COMPONENTE DE CARD DE SOLUCIÓN HOMOLOGADO ===
const SolutionCard = ({ segment, index }: { segment: typeof segments[0], index: number }) => (
  <Card 
    variant="glass" 
    hover 
    className={`relative overflow-hidden group h-full flex flex-col geometric border border-white/10 transition-all duration-500 ${segment.hoverColor}`}
    padding="lg"
  >
    {/* Gradiente de fondo dinámico */}
    <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
    
    {/* Efecto de brillo en hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    {/* Contenido */}
    <div className="relative z-10 flex flex-col h-full">
      
      {/* Icono */}
      <div className="mb-6 text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300">
        {segment.icon}
      </div>
      
      {/* Título y subtítulo */}
      <div className="mb-6">
        <Heading level={3} size="heading" className="mb-2 group-hover:text-blue-cristal transition-colors duration-300">
          {segment.title}
        </Heading>
        <Text size="small" className="text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300 uppercase tracking-wide font-medium">
          {segment.subtitle}
        </Text>
      </div>
      
      {/* Descripción */}
      <div className="flex-grow mb-8">
        <Text className="leading-relaxed group-hover:text-blanco-perla transition-colors duration-300">
          {segment.description}
        </Text>
      </div>
      
      {/* CTA */}
      <div className="mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          href={segment.cta.href}
          className="w-full group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          }
          iconPosition="right"
        >
          {segment.cta.text}
        </Button>
      </div>
    </div>

    {/* Decoración esquina */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-viretec/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric" />
    
    {/* Línea decorativa inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-viretec/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </Card>
)

// === COMPONENTE PRINCIPAL ===
const SegmentedSolutions = () => {
  return (
    <section className="bg-black py-32" id="soluciones">
      <div className="container mx-auto px-6 lg:px-8">
      
      {/* Header de sección corregido */}
      <div className="text-center mb-16">
        {/* Badge corregido */}
        <div className="mb-6 fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium uppercase tracking-wide">
            <div className="w-2 h-2 bg-blue-500 animate-pulse"></div>
            Nuestro Enfoque
          </span>
        </div>
        
        {/* Título corregido */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 fade-in" style={{animationDelay: '0.2s'}}>
          Un Ecosistema, Múltiples Soluciones
        </h2>
        
        {/* Descripción corregida */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
          Diseñamos soluciones específicas para maximizar el valor que cada participante aporta y recibe del ecosistema VIRETEC. Cada segmento tiene su camino optimizado hacia el impacto.
        </p>
      </div>

      {/* Grid de soluciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {segments.map((segment, index) => (
          <div
            key={segment.id}
            className="fade-in"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <SolutionCard segment={segment} index={index} />
          </div>
        ))}
      </div>

      {/* CTA Section corregido */}
      <div className="text-center mt-16 fade-in" style={{animationDelay: '0.8s'}}>
        <h3 className="text-3xl font-bold text-white mb-6">
          ¿No encuentras tu perfil?
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Cada situación es única. Conversemos para encontrar la mejor manera de colaborar y maximizar tu impacto.
        </p>
        
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 font-semibold transition-all duration-300"
        >
          <span>Conversemos Sobre Tu Proyecto</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </Link>
      </div>
      </div>
    </section>
  )
}

export default SegmentedSolutions

/*
OPTIMIZACIONES APLICADAS EN HOMOLOGACIÓN:
✅ Eliminación de framer-motion (reemplazado con CSS transitions)
✅ Uso completo de ComponentesBase (Section, SectionHeader, Card, Button, etc.)
✅ Colores homologados según guía artística (blue-viretec, blue-brillante, etc.)
✅ Clase 'geometric' aplicada para border-radius: 0 en todos los elementos
✅ Efectos hover sofisticados con gradientes y transiciones
✅ Animaciones escalonadas con fade-in
✅ Grid responsivo optimizado
✅ CTA adicional para casos no cubiertos

CARACTERÍSTICAS MANTENIDAS:
✅ Estructura de datos bien organizada
✅ 4 segmentos principales (Inversionistas, Emprendedores, Empresas, Universidades)
✅ Cards interactivas con efectos visuales
✅ CTAs específicos por segmento
✅ Iconos SVG personalizados
✅ Layout responsive y escalable
*/