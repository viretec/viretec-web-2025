'use client'

import { motion } from 'framer-motion'
import { ServiceCardLogo } from '../molecules/LogoVariants'
import { ArrowRight, Lightbulb, Rocket, Target, Users } from 'lucide-react'

const ServicesShowcase = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Venture Lab',
      description: 'Laboratorio de ideas donde convertimos conceptos en proyectos viables',
      color: 'from-aqua-metalico to-azul-acero'
    },
    {
      icon: Rocket,
      title: 'Venture Building',
      description: 'Construcción acelerada de startups con metodologías probadas',
      color: 'from-plateado-cromado to-azul-titanio'
    },
    {
      icon: Target,
      title: 'Venture Capital',
      description: 'Inversión estratégica en proyectos de alto impacto y rentabilidad',
      color: 'from-dorado-metalico to-bronce-pulido'
    },
    {
      icon: Users,
      title: 'Venture Showcase',
      description: 'Plataforma de presentación y conexión con inversionistas',
      color: 'from-azul-acero to-verde-cromo'
    }
  ]

  return (
    <section className="py-20 bg-negro-carbon relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-negro-carbon via-negro-azabache to-negro-carbon opacity-80" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <ServiceCardLogo className="animate-glow-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-metal-right bg-clip-text text-transparent">
              Nuestro Ecosistema
            </h2>
            <ServiceCardLogo className="animate-glow-pulse" />
          </div>
          <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
            Innovamos para mejorar el mundo y somos felices haciéndolo
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="metal-card p-8 h-full hover:shadow-metal-xl transition-all duration-500 relative overflow-hidden">
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer-right" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Viretec Logo */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} relative group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-negro-azabache" />
                    </div>
                    <ServiceCardLogo className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-105 transform origin-left transition-transform duration-300`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gris-claro/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-aqua-metalico group-hover:text-plateado-cromado transition-colors duration-300">
                    <span className="font-medium">Explorar</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-60`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Main Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 p-6 metal-card bg-gradient-to-r from-negro-carbon to-negro-azabache">
            <ServiceCardLogo className="animate-pulse-metal" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gradient-aqua mb-2">
                ¿Listo para innovar?
              </h3>
              <p className="text-gris-claro/70">
                Únete al ecosistema Viretec y transforma tu idea en realidad
              </p>
            </div>
            <button className="metal-button">
              Comenzar Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesShowcase