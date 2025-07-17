// =====================================================================
// PORTFOLIO ENHANCED - VIRETEC 2025 - VERSIÓN CORREGIDA
// ✅ Tailwind estándar | ✅ Imágenes full width | ✅ Efectos optimizados
// =====================================================================

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionHeader, Card, Button, Heading, Text } from '@/app/components/ui/ComponentesBase'

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

  // Componente de filtro corregido
  const CategoryFilter = ({ category, isActive }: { category: typeof categories[0], isActive: boolean }) => (
    <button
      onClick={() => setActiveCategory(category.id)}
      className={`px-6 py-3 font-medium transition-all duration-300 relative overflow-hidden group ${
        isActive
          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
          : 'bg-gray-800/30 border border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-white'
      }`}
    >
      <span className="relative z-10">{category.name}</span>
      {!isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </button>
  )

  // Componente de proyecto corregido con imágenes full width
  const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <div className="group relative overflow-hidden bg-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-400 hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col">
      
      {/* Imagen corregida - FULL WIDTH */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full transition-transform duration-400 group-hover:scale-105"
        />
        
        {/* Overlay suavizado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-400" />
        
        {/* Badge destacado corregido */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wide">
            Destacado
          </div>
        )}

        {/* Efecto de brillo simplificado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Título y descripción */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* Métricas horizontales corregidas */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-600/30">
          <div className="text-center">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Impacto</div>
            <div className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              {project.metrics.impact}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Inversión</div>
            <div className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              {project.metrics.investment}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Etapa</div>
            <div className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              {project.metrics.stage}
            </div>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-700/50 border border-gray-600/30 text-xs text-gray-300 group-hover:border-blue-500/40 group-hover:text-gray-200 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors duration-300 group-hover:text-blue-300"
          >
            <span>Ver Caso de Estudio</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decoración esquina simplificada */}
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )

  return (
    <Section background="primary" padding="xl" id="portfolio">
      
      {/* Header de sección */}
      <SectionHeader
        badge="Portafolio"
        title="Proyectos que Transforman el Mundo"
        description="Startups validadas y en crecimiento que están creando impacto real en sus industrias y comunidades. Cada proyecto representa una solución innovadora a desafíos globales."
        align="center"
      />

      {/* Filtros de categorías corregidos */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 fade-in" style={{animationDelay: '0.2s'}}>
        {categories.map((category) => (
          <CategoryFilter
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
          />
        ))}
      </div>

      {/* Grid de proyectos corregido */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="fade-in"
            style={{animationDelay: `${0.4 + index * 0.1}s`}}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* CTA Final corregido */}
      <div className="mt-20 fade-in" style={{animationDelay: '1s'}}>
        <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-12 relative overflow-hidden">
          
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/10 to-blue-500/5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Tienes un Proyecto Innovador?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a nuestro portafolio de startups de alto impacto. Validamos, escalamos y transformamos ideas en empresas exitosas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ecosistema/lab"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span>Aplica al Venture Lab</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 font-semibold transition-all duration-300"
              >
                Ver Portafolio Completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PortfolioEnhanced

/*
🛠️ CORRECCIONES APLICADAS:

✅ IMÁGENES FULL WIDTH:
- Removed padding="none" from Card
- Added w-full h-full to Image
- Added proper sizes prop for optimization
- Ensured container takes full width

✅ TAILWIND ESTÁNDAR:
- bg-negro-absoluto → bg-black
- text-blanco-puro → text-white  
- bg-blue-viretec → bg-blue-500
- text-gris-platino → text-gray-300
- All custom variables replaced

✅ EFECTOS OPTIMIZADOS:
- duration-700 → duration-400 (faster)
- scale-110 → scale-105 (more subtle)
- from-black/90 → from-black/70 (lighter overlay)
- Simplified hover effects

✅ LAYOUT MEJORADO:
- Better spacing and gaps
- Proper flex layout for cards
- Improved responsive grid
- Clean geometric design maintained

✅ PERFORMANCE:
- Removed excessive CSS effects
- Optimized transitions
- Better image loading
- Cleaner DOM structure
*/