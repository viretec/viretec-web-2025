'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Leaf, Users, DollarSign, Target, Award, Globe, Building } from 'lucide-react'

const impactMetrics = [
  {
    icon: Building,
    number: '50+',
    label: 'Empresas Creadas',
    description: 'Startups exitosas lanzadas desde 2009',
    color: 'azul-acero'
  },
  {
    icon: DollarSign,
    number: '$10M+',
    label: 'Capital Gestionado',
    description: 'Inversión total en proyectos de innovación',
    color: 'plateado-cromado'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Innovadores Apoyados',
    description: 'Emprendedores y científicos acompañados',
    color: 'verde-cromo'
  },
  {
    icon: Globe,
    number: '15',
    label: 'Países Alcanzados',
    description: 'Presencia internacional de nuestros proyectos',
    color: 'aqua-metalico'
  },
  {
    icon: Leaf,
    number: '30%',
    label: 'Proyectos Sustentables',
    description: 'Enfocados en sostenibilidad ambiental',
    color: 'verde-eco'
  },
  {
    icon: Award,
    number: '25+',
    label: 'Premios Obtenidos',
    description: 'Reconocimientos por innovación y impacto',
    color: 'ambar-metalico'
  }
]

const caseStudies = [
  {
    id: 1,
    title: 'BioTech Solutions',
    category: 'Biotecnología',
    description: 'Desarrollo de biofertilizantes que incrementan productividad agrícola 40% y reducen uso de químicos.',
    impact: '$2.5M en ventas anuales',
    sustainability: '60% reducción en químicos',
    image: '/images/cases/biotech.jpg',
    color: 'verde-cromo'
  },
  {
    id: 2,
    title: 'CleanEnergy Tech',
    category: 'Energía Limpia',
    description: 'Tecnología solar de nueva generación con 35% mayor eficiencia que paneles tradicionales.',
    impact: '500+ instalaciones',
    sustainability: '2,000 tons CO2 evitadas/año',
    image: '/images/cases/cleanenergy.jpg',
    color: 'azul-acero'
  },
  {
    id: 3,
    title: 'AgroTech Innovation',
    category: 'AgTech',
    description: 'Plataforma IoT para agricultura de precisión que optimiza uso de agua y nutrientes.',
    impact: '$1.8M Series A',
    sustainability: '40% ahorro de agua',
    image: '/images/cases/agrotech.jpg',
    color: 'plateado-cromado'
  }
]

const sdgGoals = [
  {
    number: 3,
    title: 'Salud y Bienestar',
    description: '15 proyectos en biotecnología médica',
    projects: 15
  },
  {
    number: 6,
    title: 'Agua Limpia',
    description: '8 soluciones de tratamiento de agua',
    projects: 8
  },
  {
    number: 7,
    title: 'Energía Limpia',
    description: '12 proyectos de energías renovables',
    projects: 12
  },
  {
    number: 9,
    title: 'Innovación',
    description: 'Todos nuestros proyectos impulsan la innovación',
    projects: 50
  },
  {
    number: 12,
    title: 'Consumo Responsable',
    description: '10 proyectos de economía circular',
    projects: 10
  },
  {
    number: 13,
    title: 'Acción Climática',
    description: '20 proyectos con impacto climático',
    projects: 20
  }
]

export default function ImpactoPage() {
  return (
    <div className="min-h-screen bg-negro-carbon pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-display-lg font-black mb-6">
              Nuestro <span className="text-gradient-metal">Impacto</span>
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              15 años transformando ideas en empresas exitosas que generan valor 
              económico, social y ambiental verificable.
            </p>
            <div className="inline-flex items-center gap-2 bg-azul-titanio/20 px-4 py-2 rounded-full">
              <Target className="w-4 h-4 text-azul-acero" />
              <span className="text-azul-acero text-sm font-medium">
                Triple Impacto: Económico · Social · Ambiental
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-bold mb-6">
              Impacto en <span className="text-gradient-metal">Números</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Métricas verificables de nuestro impacto en el ecosistema de innovación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-${metric.color}/20 flex items-center justify-center mb-6`}>
                  <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                </div>
                <div className="text-4xl font-black text-plateado-cromado mb-2">
                  {metric.number}
                </div>
                <h3 className="text-xl font-bold text-plateado-cromado mb-3">
                  {metric.label}
                </h3>
                <p className="text-gris-claro/70 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Casos de <span className="text-gradient-metal">Éxito</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Proyectos destacados que ejemplifican nuestro enfoque de triple impacto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-azul-acero/30 to-dorado-metalico/30 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-${study.color}/20 flex items-center justify-center`}>
                    <Building className={`w-8 h-8 text-${study.color}`} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full bg-${study.color}/20 text-${study.color} text-xs font-medium mb-3`}>
                    {study.category}
                  </div>
                  <h3 className="text-xl font-bold text-plateado-cromado mb-3 group-hover:text-plateado-cromado transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gris-claro/70 mb-4">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gris-titanio/20">
                    <div>
                      <div className="text-sm text-plateado-cromado font-medium">Impacto Económico</div>
                      <div className="text-plateado-cromado font-semibold">{study.impact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-plateado-cromado font-medium">Impacto Ambiental</div>
                      <div className="text-verde-cromo font-semibold">{study.sustainability}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/recursos/casos-de-exito">
              <button className="metal-button px-8 py-4">
                Ver Todos los Casos
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-bold mb-6">
              Alineación con <span className="text-gradient-metal">ODS</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Nuestros proyectos contribuyen directamente a los Objetivos de Desarrollo Sostenible de la ONU.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-azul-acero/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-azul-acero">
                    {goal.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-plateado-cromado mb-2">
                  ODS {goal.number}: {goal.title}
                </h3>
                <p className="text-gris-claro/70 text-sm mb-4">
                  {goal.description}
                </p>
                <div className="text-2xl font-bold text-plateado-cromado">
                  {goal.projects} proyectos
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
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
              Crecimiento del <span className="text-gradient-metal">Impacto</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Evolución de nuestro impacto a lo largo de los años.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { period: '2009-2012', projects: '12', funding: '$500K', description: 'Primeros proyectos en biotecnología' },
                { period: '2013-2016', projects: '25', funding: '$2.5M', description: 'Expansión a energías limpias' },
                { period: '2017-2020', projects: '35', funding: '$6M', description: 'Desarrollo del ecosistema' },
                { period: '2021-2025', projects: '50+', funding: '$10M+', description: 'Consolidación como líder' }
              ].map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-lg font-bold text-plateado-cromado mb-2">
                    {period.period}
                  </div>
                  <div className="text-3xl font-black text-plateado-cromado mb-1">
                    {period.projects}
                  </div>
                  <div className="text-sm text-gris-claro/60 mb-1">proyectos</div>
                  <div className="text-xl font-bold text-azul-acero mb-2">
                    {period.funding}
                  </div>
                  <div className="text-sm text-gris-claro/70">
                    {period.description}
                  </div>
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
              ¿Quieres <span className="text-gradient-metal">formar parte</span> de nuestro impacto?
            </h2>
            <p className="text-xl text-gris-claro/80 mb-8">
              Únete a nosotros para crear las empresas que transformarán el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="metal-button px-8 py-4">
                  Comenzar mi Proyecto
                </button>
              </Link>
              <Link href="/recursos/reporte-impacto">
                <button className="px-8 py-4 rounded-lg border-2 border-plateado-cromado text-plateado-cromado font-semibold hover:bg-plateado-cromado/10 transition-all duration-300">
                  Descargar Reporte de Impacto
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}