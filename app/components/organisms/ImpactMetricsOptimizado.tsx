'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MetricsIcon, InvestorIcon, RocketIcon, TeamIcon } from '@/app/components/atoms/CustomIcons'

interface Metric {
  icon: React.ReactNode
  value: string
  label: string
  suffix?: string
  description: string
  category: string
}

// Componente de métrica individual inspirado en la imagen
const MetricCardOptimizada = ({ 
  metric, 
  index, 
  isVisible, 
  counter 
}: {
  metric: Metric
  index: number
  isVisible: boolean
  counter: number
}) => (
  <div 
    className="group relative bg-bg-card/30 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:bg-bg-card/50"
    style={{
      animationDelay: `${index * 0.2}s`
    }}
  >
    {/* Header con categoría */}
    <div className="p-6 border-b border-white/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-blue-400 opacity-80">
            {metric.icon}
          </div>
          <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
            {metric.category}
          </span>
        </div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
      </div>
      
      {/* Valor principal destacado */}
      <div className="mb-2">
        <span className="text-4xl xl:text-5xl font-bold text-white">
          {isVisible ? counter : 0}
        </span>
        {metric.suffix && (
          <span className="text-2xl xl:text-3xl font-bold text-blue-400 ml-1">
            {metric.suffix}
          </span>
        )}
      </div>
      
      {/* Label principal */}
      <div className="text-white/90 font-medium text-base">
        {metric.label}
      </div>
    </div>
    
    {/* Footer con descripción */}
    <div className="p-6">
      <p className="text-white/60 text-sm leading-relaxed">
        {metric.description}
      </p>
      
      {/* Barra de progreso decorativa */}
      <div className="mt-4 w-full h-px bg-gradient-to-r from-blue-500/30 via-blue-500/60 to-transparent group-hover:from-blue-500/50 group-hover:via-blue-500/80 transition-all duration-500"></div>
    </div>
    
    {/* Efecto de hover sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    
    {/* Decoración esquina */}
    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
)

// Componente principal optimizado
const ImpactMetricsOptimizado = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const metrics: Metric[] = [
    {
      icon: <InvestorIcon size={32} />,
      value: '127',
      label: 'Capital de Impacto',
      suffix: 'M USD',
      description: 'Capital gestionado activamente en proyectos de triple impacto y innovación sustentable.',
      category: 'Inversión'
    },
    {
      icon: <RocketIcon size={32} />,
      value: '45',
      label: 'Startups en Portafolio',
      suffix: '+',
      description: 'Empresas innovadoras enfocadas en soluciones sustentables y tecnología de impacto.',
      category: 'Portfolio'
    },
    {
      icon: <TeamIcon size={32} />,
      value: '3500',
      label: 'Empleos Generados',
      suffix: '+',
      description: 'Empleos de calidad creados directa e indirectamente por nuestro ecosistema de startups.',
      category: 'Impacto Social'
    },
    {
      icon: <MetricsIcon size={32} />,
      value: '89',
      label: 'Tasa de Éxito',
      suffix: '%',
      description: 'Porcentaje de startups que han alcanzado sus métricas de crecimiento e impacto.',
      category: 'Performance'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals: NodeJS.Timeout[] = []
    
    metrics.forEach((metric, index) => {
      const targetValue = parseInt(metric.value)
      const duration = 2500 // Aumentado para mejor efecto
      const steps = 80
      const increment = targetValue / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          current = targetValue
          clearInterval(interval)
        }
        setCounters(prev => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, duration / steps)

      intervals.push(interval)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background futurista sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern muy sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10">
        
        {/* Header de sección optimizado */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="mb-6 fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-small font-medium uppercase tracking-wide">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Nuestro Impacto
            </span>
          </div>
          
          <h2 className="text-display text-primary mb-6 fade-in" style={{animationDelay: '0.2s'}}>
            Números que Transforman
          </h2>
          
          <p className="text-subtitle text-secondary leading-relaxed fade-in" style={{animationDelay: '0.4s'}}>
            16 años construyendo el futuro sustentable con resultados tangibles 
            que trascienden lo financiero para crear impacto real.
          </p>
        </div>

        {/* Grid de métricas optimizado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <MetricCardOptimizada
              key={index}
              metric={metric}
              index={index}
              isVisible={isVisible}
              counter={counters[index]}
            />
          ))}
        </div>

        {/* CTA section inspirado en la imagen */}
        <div className="text-center fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-500/20 p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-heading text-primary mb-4">
              El Futuro Empieza Hoy
            </h3>
            <p className="text-body text-secondary mb-8 max-w-2xl mx-auto">
              Estos números son solo el comienzo. Únete a nosotros para crear 
              el próximo capítulo de innovación sustentable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="btn btn-primary btn-lg group"
              >
                <span>Únete a la Misión</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="/impacto" 
                className="btn btn-secondary btn-lg"
              >
                Ver Reporte Completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactMetricsOptimizado