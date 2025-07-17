'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, Eye, DollarSign, Rocket } from 'lucide-react'

// Datos del ecosistema
const ecosystemComponents = [
  {
    id: 'venture-lab',
    title: 'Venture Lab',
    subtitle: 'La Fórmula de la Innovación',
    description: 'Metodología propia para validar y desarrollar ideas innovadoras desde el concepto hasta el prototipo funcional.',
    icon: Lightbulb,
    features: [
      'Validación técnica y de mercado',
      'Desarrollo de MVP',
      'Análisis de factibilidad',
      'Roadmap de desarrollo'
    ],
    colorClasses: {
      bg: 'bg-azul-acero/20',
      text: 'text-azul-acero',
      dot: 'bg-azul-acero'
    },
    href: '/ecosistema/venture-lab'
  },
  {
    id: 'venture-showcase',
    title: 'Venture Showcase',
    subtitle: 'Portafolio Validado',
    description: 'Plataforma que presenta proyectos validados y listos para inversión, con due diligence completo.',
    icon: Eye,
    features: [
      'Proyectos pre-validados',
      'Due diligence completo',
      'Métricas de impacto',
      'Oportunidades de inversión'
    ],
    colorClasses: {
      bg: 'bg-plateado-cromado/20',
      text: 'text-plateado-cromado',
      dot: 'bg-plateado-cromado'
    },
    href: '/ecosistema/venture-showcase'
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    subtitle: 'Gestión de Capital',
    description: 'Conectamos capital inteligente con proyectos de alto impacto, maximizando retornos y transformación.',
    icon: DollarSign,
    features: [
      'Gestión profesional de fondos',
      'Red de inversionistas',
      'Estructuración financiera',
      'Acompañamiento post-inversión'
    ],
    colorClasses: {
      bg: 'bg-verde-cromo/20',
      text: 'text-verde-cromo',
      dot: 'bg-verde-cromo'
    },
    href: '/ecosistema/venture-capital'
  },
  {
    id: 'venture-building',
    title: 'Venture Building',
    subtitle: 'Escalamiento Empresarial',
    description: 'Aceleramos el crecimiento de startups con recursos, talento y expertise para escalar globalmente.',
    icon: Rocket,
    features: [
      'Escalamiento operativo',
      'Expansión de mercado',
      'Captación de talento',
      'Estrategia de crecimiento'
    ],
    colorClasses: {
      bg: 'bg-aqua-metalico/20',
      text: 'text-aqua-metalico',
      dot: 'bg-aqua-metalico'
    },
    href: '/ecosistema/venture-building'
  }
]

export default function EcosistemaPage() {
  return (
    <div className="min-h-screen bg-negro-carbon pt-20">
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-display-lg font-black mb-6">
              Nuestro <span className="text-gradient-metal">Ecosistema</span> Venture Studio
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              Un ecosistema integrado que conecta ideas, capital y talento para crear 
              las empresas del futuro con impacto sustentable.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '4', label: 'Componentes Integrados' },
                { number: '360°', label: 'Acompañamiento' },
                { number: '15+', label: 'Años de Experiencia' },
                { number: '50M+', label: 'Valor Creado' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-plateado-cromado mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gris-claro/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystemComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-8 hover:scale-[1.02] transition-transform duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg ${component.colorClasses.bg}`}>
                    <component.icon className={`w-8 h-8 ${component.colorClasses.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-plateado-cromado mb-2 group-hover:text-plateado-cromado transition-colors">
                      {component.title}
                    </h3>
                    <p className="text-gris-claro/60 text-sm mb-4">
                      {component.subtitle}
                    </p>
                    <p className="text-gris-claro/80 mb-6">
                      {component.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {component.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gris-claro/70">
                          <div className={`w-1.5 h-1.5 rounded-full ${component.colorClasses.dot}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={component.href}>
                      <button className="metal-button px-6 py-2 text-sm">
                        Explorar {component.title}
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-negro-azabache">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-bold mb-6">
              El <span className="text-gradient-metal">Flujo</span> de Innovación
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Desde la idea hasta la empresa consolidada, nuestro ecosistema guía 
              cada paso del journey de innovación.
            </p>
          </motion.div>

          <div className="relative">
            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {ecosystemComponents.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto rounded-full ${component.colorClasses.bg} flex items-center justify-center mb-4`}>
                      <component.icon className={`w-8 h-8 ${component.colorClasses.text}`} />
                    </div>
                    {index < ecosystemComponents.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-gris-titanio to-transparent" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-plateado-cromado mb-2">
                    {component.title}
                  </h3>
                  <p className="text-sm text-gris-claro/60">
                    {component.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-display-md font-bold mb-6">
              ¿Listo para <span className="text-gradient-metal">formar parte</span> del ecosistema?
            </h2>
            <p className="text-xl text-gris-claro/80 mb-8">
              Únete a nosotros y transforma tu idea en una empresa que cambie el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="metal-button px-8 py-4">
                  Comenzar mi Proyecto
                </button>
              </Link>
              <Link href="/soluciones">
                <button className="px-8 py-4 rounded-lg border-2 border-plateado-cromado text-plateado-cromado font-semibold hover:bg-plateado-cromado/10 transition-all duration-300">
                  Ver Soluciones
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}