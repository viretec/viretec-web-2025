'use client'

import React, { useRef, useEffect, useState } from 'react'
import { TeamIcon, RocketIcon, NetworkIcon, MetricsIcon, LabIcon, InvestorIcon } from '@/app/components/atoms/CustomIcons'
import Image from 'next/image'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  highlight?: boolean
}

interface TeamMember {
  name: string
  role: string
  image: string
}

const AboutUs = () => {
  const [activeYear, setActiveYear] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2009',
      title: 'El Inicio del Viaje',
      description: 'Comenzamos con un sueño: innovar para mejorar el mundo y ser felices haciéndolo.',
      icon: <RocketIcon size={24} />
    },
    {
      year: '2012',
      title: 'Primeros Proyectos',
      description: 'Validamos nuestras primeras innovaciones tecnológicas con impacto social.',
      icon: <LabIcon size={24} />
    },
    {
      year: '2015',
      title: 'Consolidación del Modelo',
      description: 'Establecimos nuestro modelo de Venture Studio y comenzamos a escalar.',
      icon: <NetworkIcon size={24} />
    },
    {
      year: '2018',
      title: 'Expansión Regional',
      description: 'Nos convertimos en referentes del ecosistema de innovación en México.',
      icon: <MetricsIcon size={24} />
    },
    {
      year: '2021',
      title: 'Triple Impacto',
      description: 'Adoptamos el modelo de triple impacto: económico, social y ambiental.',
      icon: <InvestorIcon size={24} />,
      highlight: true
    },
    {
      year: '2025',
      title: 'Líderes en LATAM',
      description: 'Somos el Venture Studio más importante de Latinoamérica, transformando el futuro.',
      icon: <TeamIcon size={24} />,
      highlight: true
    }
  ]

  const teamMembers: TeamMember[] = [
    { name: 'Andrés Gómez', role: 'Dirección General', image: '/team/andres.jpg' },
    { name: 'Luis E. Pizzuto Villalobos', role: 'Consejo de Dirección', image: '/team/luis.jpg' },
    { name: 'Daniel Gatica', role: 'Gestión de Innovación y Plataformas Digitales', image: '/team/daniel.jpg' },
    { name: 'Pilar Montoya', role: 'Gerente Venture Studio', image: '/team/pilar.jpg' },
    { name: 'Tanya Reyna', role: 'Administración y Tesorería', image: '/team/tanya.jpg' },
    { name: 'Óscar Ojeda', role: 'Gestión de Proyectos', image: '/team/oscar.jpg' },
    { name: 'Edgar Méndez', role: 'Líder de Ingeniería', image: '/team/edgar.jpg' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      
      const timeline = timelineRef.current
      const rect = timeline.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight)))
      
      const newActiveYear = Math.floor(scrollProgress * timelineEvents.length)
      setActiveYear(Math.min(newActiveYear, timelineEvents.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [timelineEvents.length])

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-negro-carbon to-negro-carbon/95">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-verde-cromo bg-verde-cromo/10 rounded-full">
            Nuestra Historia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            El Viaje de Viretec
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gris-claro/80">
            Desde 2009, hemos recorrido un camino de innovación constante, 
            transformando ideas en realidades que mejoran el mundo
          </p>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-32">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gris-titanio/30">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-verde-cromo to-aqua-metalico transition-all duration-500"
              style={{ height: `${(activeYear + 1) / timelineEvents.length * 100}%` }}
            />
          </div>

          {/* Timeline events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div
                    className={`inline-block p-6 rounded-xl transition-all duration-500 ${
                      index <= activeYear
                        ? 'bg-negro-carbon border border-plateado-cromado/30 shadow-metal-md'
                        : 'bg-negro-carbon/50 border border-gris-titanio/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {index % 2 !== 0 && (
                        <div className={`p-2 rounded-lg ${
                          index <= activeYear ? 'bg-verde-cromo/20 text-verde-cromo' : 'bg-gris-titanio/20 text-gris-titanio'
                        }`}>
                          {event.icon}
                        </div>
                      )}
                      <div className={index % 2 === 0 ? 'ml-auto' : ''}>
                        <span className={`text-2xl font-bold ${
                          index <= activeYear ? 'text-white' : 'text-gris-titanio'
                        }`}>
                          {event.year}
                        </span>
                      </div>
                      {index % 2 === 0 && (
                        <div className={`p-2 rounded-lg ${
                          index <= activeYear ? 'bg-verde-cromo/20 text-verde-cromo' : 'bg-gris-titanio/20 text-gris-titanio'
                        }`}>
                          {event.icon}
                        </div>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      index <= activeYear ? 'text-white' : 'text-gris-titanio'
                    }`}>
                      {event.title}
                    </h3>
                    <p className={`text-sm ${
                      index <= activeYear ? 'text-gris-claro/80' : 'text-gris-titanio/60'
                    }`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                    index <= activeYear
                      ? event.highlight
                        ? 'bg-verde-cromo border-verde-cromo shadow-lg shadow-verde-cromo/50'
                        : 'bg-aqua-metalico border-aqua-metalico'
                      : 'bg-negro-carbon border-gris-titanio'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Equipo Multidisciplinario
            </h3>
            <p className="max-w-2xl mx-auto text-gris-claro/80">
              Un equipo diverso y apasionado que trabaja en conjunto para transformar 
              ideas en proyectos rentables con impacto sustentable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-negro-carbon border border-gris-titanio/20 p-6 text-center transition-all duration-300 hover:border-plateado-cromado hover:shadow-metal-md"
              >
                <div className="absolute inset-0 bg-gradient-metal opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-azul-titanio to-aqua-metalico p-0.5">
                    <div className="w-full h-full rounded-full bg-negro-carbon flex items-center justify-center">
                      <TeamIcon size={40} className="text-plateado-cromado" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-gris-claro/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-negro-carbon/50 backdrop-blur-sm rounded-2xl p-12 border border-gris-titanio/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-azul-acero/20 text-azul-acero mb-4">
                <MetricsIcon size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovación Constante</h4>
              <p className="text-gris-claro/80">
                Buscamos soluciones disruptivas que transformen industrias y mejoren vidas
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-verde-cromo/20 text-verde-cromo mb-4">
                <NetworkIcon size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Colaboración Global</h4>
              <p className="text-gris-claro/80">
                Conectamos talento, capital y tecnología para crear impacto a escala mundial
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-lg bg-aqua-metalico/20 text-aqua-metalico mb-4">
                <TeamIcon size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Propósito Compartido</h4>
              <p className="text-gris-claro/80">
                Unidos por la misión de innovar para mejorar el mundo y ser felices haciéndolo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
