'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MetricsIcon } from '@/app/components/atoms/CustomIcons'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  metrics: {
    impact: string
    investment: string
    stage: string
  }
  technologies: string[]
  featured?: boolean
}

const PortfolioEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Proyectos' },
    { id: 'tech', name: 'Tecnología' },
    { id: 'sustainability', name: 'Sustentabilidad' },
    { id: 'health', name: 'Salud' },
    { id: 'education', name: 'Educación' }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: 'EcoTech Solutions',
      category: 'sustainability',
      description: 'Plataforma IoT para optimización de recursos energéticos en industrias',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop',
      metrics: {
        impact: '40% reducción CO2',
        investment: '$2.5M USD',
        stage: 'Serie A'
      },
      technologies: ['IoT', 'AI', 'Blockchain'],
      featured: true
    },
    {
      id: 2,
      title: 'HealthAI Diagnostics',
      category: 'health',
      description: 'IA para diagnóstico temprano de enfermedades crónicas',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      metrics: {
        impact: '85% precisión',
        investment: '$5M USD',
        stage: 'Serie B'
      },
      technologies: ['Machine Learning', 'Medical Tech'],
      featured: true
    },
    {
      id: 3,
      title: 'EduTech Platform',
      category: 'education',
      description: 'Plataforma de aprendizaje adaptativo con IA para educación personalizada',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      metrics: {
        impact: '10K+ estudiantes',
        investment: '$1.2M USD',
        stage: 'Seed'
      },
      technologies: ['EdTech', 'AI', 'Cloud']
    },
    {
      id: 4,
      title: 'AgriTech Innovation',
      category: 'tech',
      description: 'Agricultura de precisión con drones y análisis de datos',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      metrics: {
        impact: '30% más productividad',
        investment: '$3M USD',
        stage: 'Serie A'
      },
      technologies: ['Drones', 'Big Data', 'IoT']
    },
    {
      id: 5,
      title: 'CleanWater Tech',
      category: 'sustainability',
      description: 'Tecnología de purificación de agua para comunidades rurales',
      image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800&h=600&fit=crop',
      metrics: {
        impact: '50K personas beneficiadas',
        investment: '$1.8M USD',
        stage: 'Seed'
      },
      technologies: ['Nanotech', 'Sustentabilidad']
    },
    {
      id: 6,
      title: 'FinTech Solutions',
      category: 'tech',
      description: 'Inclusión financiera mediante blockchain y pagos digitales',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
      metrics: {
        impact: '100K+ usuarios',
        investment: '$4M USD',
        stage: 'Serie A'
      },
      technologies: ['Blockchain', 'FinTech', 'Mobile']
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-negro-carbon/95 to-negro-carbon">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-aqua-metalico bg-aqua-metalico/10 rounded-full">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Proyectos que Transforman el Mundo
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gris-claro/80">
            Startups validadas y en crecimiento que están creando impacto real 
            en sus industrias y comunidades
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-aqua-metalico text-negro-carbon'
                  : 'bg-negro-carbon border border-gris-titanio/30 text-gris-claro hover:border-plateado-cromado hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-negro-carbon border border-gris-titanio/20 transition-all duration-300 hover:border-plateado-cromado hover:shadow-metal-xl ${
                project.featured ? 'ring-2 ring-verde-cromo/30' : ''
              }`}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-negro-carbon/80 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-verde-cromo text-negro-carbon text-xs font-bold rounded-full">
                    Destacado
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-metal-animated transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gris-claro/80 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-gris-titanio/20">
                  <div className="text-center">
                    <p className="text-xs text-gris-claro/60 mb-1">Impacto</p>
                    <p className="text-sm font-semibold text-verde-cromo">{project.metrics.impact}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gris-claro/60 mb-1">Inversión</p>
                    <p className="text-sm font-semibold text-aqua-metalico">{project.metrics.investment}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gris-claro/60 mb-1">Etapa</p>
                    <p className="text-sm font-semibold text-plateado-cromado">{project.metrics.stage}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-negro-carbon/50 border border-gris-titanio/30 rounded-full text-xs text-gris-claro/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-plateado-cromado hover:text-white transition-colors"
                >
                  <span>Ver caso de estudio</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-negro-carbon/50 backdrop-blur-sm rounded-2xl border border-gris-titanio/20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Tienes un proyecto innovador?
              </h3>
              <p className="text-gris-claro/80">
                Únete a nuestro portafolio de startups de alto impacto
              </p>
            </div>
            <Link href="/ecosistema/lab" className="btn-metal-primary whitespace-nowrap">
              <span>Aplica Ahora</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioEnhanced
