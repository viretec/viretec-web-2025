'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MetricsIcon, InvestorIcon, RocketIcon, TeamIcon } from '@/app/components/atoms/CustomIcons'

interface Metric {
  icon: React.ReactNode
  value: string
  label: string
  suffix?: string
}

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const metrics: Metric[] = [
    {
      icon: <InvestorIcon size={40} />,
      value: '127',
      label: 'Millones USD Gestionados',
      suffix: 'M'
    },
    {
      icon: <RocketIcon size={40} />,
      value: '45',
      label: 'Startups en Portafolio',
      suffix: '+'
    },
    {
      icon: <TeamIcon size={40} />,
      value: '3500',
      label: 'Empleos Generados',
      suffix: '+'
    },
    {
      icon: <MetricsIcon size={40} />,
      value: '89',
      label: 'Tasa de Éxito',
      suffix: '%'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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
      const duration = 2000 // 2 seconds
      const steps = 60
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
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-negro-carbon relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-verde-cromo bg-verde-cromo/10 rounded-full">
            Nuestro Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Números que Hablan por Sí Mismos
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gris-claro/80">
            16 años transformando el ecosistema de innovación en Latinoamérica con resultados tangibles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-negro-carbon rounded-xl border border-gris-titanio/20 p-8 text-center transition-all duration-300 hover:border-plateado-cromado hover:shadow-metal-lg"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-radial from-plateado-cromado/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-azul-titanio/20 to-aqua-metalico/20 text-aqua-metalico mb-6 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    {isVisible ? counters[index] : 0}
                  </span>
                  {metric.suffix && (
                    <span className="text-3xl sm:text-4xl font-bold text-plateado-cromado ml-1">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-gris-claro/80 font-medium">
                  {metric.label}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-plateado-cromado to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gris-claro/70 mb-6">
            Y esto es solo el comienzo. Únete a nosotros para crear el futuro.
          </p>
          <div className="inline-flex items-center gap-2 text-verde-cromo">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Descubre más en nuestro reporte anual</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactMetrics
