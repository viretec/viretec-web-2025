'use client'

import React from 'react'
import Link from 'next/link'
import { InvestorIcon, InnovatorIcon, EnterpriseIcon, LabIcon } from '@/app/components/atoms/CustomIcons'

interface EcosystemCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  audience: string
  color: 'azul-acero' | 'verde-cromo' | 'plateado-cromado' | 'aqua-metalico'
  href: string
  benefits: string[]
}

const colorClasses = {
  'azul-acero': 'bg-azul-acero/20 text-azul-acero hover:bg-azul-acero',
  'verde-cromo': 'bg-verde-cromo/20 text-verde-cromo hover:bg-verde-cromo',
  'plateado-cromado': 'bg-plateado-cromado/20 text-plateado-cromado hover:bg-plateado-cromado',
  'aqua-metalico': 'bg-aqua-metalico/20 text-aqua-metalico hover:bg-aqua-metalico'
}

const EcosystemCard = ({ icon, title, subtitle, description, audience, color, href, benefits }: EcosystemCardProps) => (
  <Link 
    href={href}
    className="group relative overflow-hidden rounded-xl bg-negro-carbon border border-gris-titanio/20 p-8 transition-all duration-300 hover:scale-105 hover:border-plateado-cromado hover:shadow-metal-lg flex flex-col h-full"
  >
    {/* Metal shine effect */}
    <div className="absolute inset-0 bg-gradient-metal opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    
    {/* Audience badge */}
    <div className="absolute top-4 right-4 px-3 py-1 bg-negro-carbon/80 border border-gris-titanio/30 rounded-full">
      <span className="text-xs text-gris-claro/70">Para {audience}</span>
    </div>
    
    {/* Icon container */}
    <div className={`inline-flex p-4 rounded-lg ${colorClasses[color]} mb-6 transition-all duration-300 group-hover:text-white`}>
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-metal-animated transition-all duration-300">
      {title}
    </h3>
    <p className="text-sm text-plateado-cromado mb-3">{subtitle}</p>
    <p className="text-gris-claro/80 leading-relaxed mb-4 flex-grow">
      {description}
    </p>
    
    {/* Key benefits */}
    <ul className="space-y-2 mb-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2 text-sm">
          <span className="text-verde-cromo mt-0.5">•</span>
          <span className="text-gris-claro/70">{benefit}</span>
        </li>
      ))}
    </ul>
    
    {/* Arrow indicator */}
    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
      <span className="text-plateado-cromado">Conoce más</span>
      <svg className="w-4 h-4 text-plateado-cromado transform translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </Link>
)

const VentureEcosystem = () => {
  const ecosystemItems = [
    {
      icon: <LabIcon size={32} />,
      title: 'Venture Lab',
      subtitle: 'Validación y desarrollo de innovación',
      description: 'Transformamos ideas y propiedad intelectual en oportunidades reales de negocio mediante validación técnica y de mercado.',
      audience: 'Innovadores y PIs',
      color: 'azul-acero' as const,
      href: '/ecosistema/lab',
      benefits: [
        'Validación técnica profunda',
        'Análisis de mercado y viabilidad',
        'Protección de propiedad intelectual'
      ]
    },
    {
      icon: <InvestorIcon size={32} />,
      title: 'Venture Showcase',
      subtitle: 'Portafolio curado para inversión',
      description: 'Presentamos startups validadas y listas para escalar a inversionistas calificados, con métricas claras de impacto y retorno.',
      audience: 'Inversionistas',
      color: 'verde-cromo' as const,
      href: '/ecosistema/showcase',
      benefits: [
        'Due diligence completo',
        'Métricas de impacto verificadas',
        'Oportunidades pre-seleccionadas'
      ]
    },
    {
      icon: <InvestorIcon size={32} />,
      title: 'Venture Capital',
      subtitle: 'Gestión inteligente de inversiones',
      description: 'Administramos fondos de inversión con enfoque en triple impacto, maximizando retornos financieros y beneficios sociales.',
      audience: 'Inversionistas',
      color: 'plateado-cromado' as const,
      href: '/ecosistema/capital',
      benefits: [
        'Gestión profesional de portafolio',
        'Reportes de impacto trimestrales',
        'Co-inversión estratégica'
      ]
    },
    {
      icon: <EnterpriseIcon size={32} />,
      title: 'Venture Building',
      subtitle: 'Soluciones corporativas de innovación',
      description: 'Ayudamos a empresas establecidas a innovar, escalar y transformarse digitalmente mediante metodologías ágiles probadas.',
      audience: 'Empresas',
      color: 'aqua-metalico' as const,
      href: '/ecosistema/building',
      benefits: [
        'Innovación corporativa ágil',
        'Transformación digital integral',
        'Conexión con startups del portafolio'
      ]
    }
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-negro-carbon relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-negro-carbon via-azul-titanio/5 to-negro-carbon" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-aqua-metalico bg-aqua-metalico/10 rounded-full">
            Nuestro Modelo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ecosistema Integrado de Innovación
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gris-claro/80">
            Conectamos cada pieza del rompecabezas: desde la idea hasta el impacto global, 
            con soluciones específicas para cada actor del ecosistema
          </p>
        </div>

        {/* Visual connection indicator */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative h-2 bg-gris-titanio/20 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-azul-acero via-verde-cromo to-aqua-metalico opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-xs text-gris-claro/60">Ideación</span>
            <span className="text-xs text-gris-claro/60">Validación</span>
            <span className="text-xs text-gris-claro/60">Inversión</span>
            <span className="text-xs text-gris-claro/60">Escalamiento</span>
          </div>
        </div>

        {/* Ecosystem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item, index) => (
            <EcosystemCard key={index} {...item} />
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center bg-negro-carbon/50 backdrop-blur-sm rounded-2xl p-8 border border-gris-titanio/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No sabes por dónde empezar?
          </h3>
          <p className="text-gris-claro/80 mb-6 max-w-2xl mx-auto">
            Nuestro equipo te ayudará a identificar la mejor ruta para tu perfil y objetivos
          </p>
          <Link href="/contacto" className="btn-metal-primary">
            <span>Agenda una Consulta Personalizada</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VentureEcosystem
