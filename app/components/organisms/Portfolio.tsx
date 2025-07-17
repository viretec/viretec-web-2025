'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioProjects, portfolioMetrics } from '@/app/data/portfolio'

// --- Sub-components for better structure ---

const MetricItem = ({ value, label, index }: { value: string; label: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <p className="text-4xl md:text-5xl font-bold text-gradient-metal mb-2">{value}</p>
    <span className="text-sm text-gris-texto/70 tracking-wider">{label}</span>
  </motion.div>
);

const ProjectCard = ({ project, index }: { project: typeof portfolioProjects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group card aspect-w-1 aspect-h-1 relative"
  >
    {/* Background Image */}
    <Image
      src={`https://picsum.photos/seed/${project.id}/800/800`} // Placeholder image
      alt={`Imagen del proyecto ${project.title}`}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    
    {/* Static Title Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-negro-carbon/80 via-negro-carbon/40 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-negro-fondo/80 backdrop-blur-sm p-6
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex flex-col justify-end">
      <h3 className="text-2xl font-bold text-aqua-metalico mb-2">{project.title}</h3>
      <p className="text-gris-texto/90 mb-4">{project.shortDescription}</p>
      <Link href="/impacto" className="btn-secondary w-full sm:w-auto mt-auto">
        Ver caso de éxito
      </Link>
    </div>
  </motion.div>
);


// --- Main Portfolio Component ---

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-negro-fondo">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-metal">Éxito</span> Comprobado
          </h2>
          <p className="text-lg sm:text-xl text-gris-texto/80 max-w-3xl mx-auto">
            Nuestro portfolio validado de proyectos que generan impacto real y retornos excepcionales.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <MetricItem value={portfolioMetrics.totalProjects} label="Proyectos Exitosos" index={0} />
          <MetricItem value={portfolioMetrics.totalFunding} label="Capital Levantado" index={1} />
          <MetricItem value={portfolioMetrics.averageROI} label="ROI Promedio" index={2} />
          <MetricItem value={portfolioMetrics.successRate} label="Tasa de Éxito" index={3} />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 6).map((project, index) => ( // Show first 6 projects
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA to see full portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/impacto" className="btn-primary">
            Ver Portfolio Completo
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio;
