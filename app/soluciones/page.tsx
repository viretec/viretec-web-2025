'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, TrendingUp, Building2, GraduationCap, ArrowRight } from 'lucide-react'

const solutions = [
  {
    id: 'emprendedores',
    title: 'Para Emprendedores e Innovadores',
    description: 'Transformamos tu innovación en una empresa de éxito. Te damos la metodología, el capital y el ecosistema para escalar tu impacto.',
    icon: Lightbulb,
    color: 'azul-acero',
    benefits: [
      'Validación tecnológica profesional',
      'Acceso a financiamiento estructurado',
      'Mentoría de expertos en industria',
      'Soporte empresarial integral',
      'Conexiones estratégicas de mercado'
    ],
    cta: 'Validar mi Idea',
    href: '/soluciones/emprendedores'
  },
  {
    id: 'inversionistas',
    title: 'Para Inversionistas y Fondos',
    description: 'Accede a un portafolio de oportunidades de triple impacto, curado y gestionado por expertos para maximizar el retorno y la transformación.',
    icon: TrendingUp,
    color: 'plateado-cromado',
    benefits: [
      'Deal flow cualificado y pre-validado',
      'Due diligence completo',
      'Métricas de impacto verificables',
      'Gestión profesional de portafolio',
      'Diversificación sectorial'
    ],
    cta: 'Ver Oportunidades',
    href: '/soluciones/inversionistas'
  },
  {
    id: 'empresas',
    title: 'Para Empresas e Industria',
    description: 'Resolvemos tus desafíos más complejos conectándote con tecnología de vanguardia y soluciones innovadoras a la medida.',
    icon: Building2,
    color: 'verde-cromo',
    benefits: [
      'Innovación abierta estratégica',
      'Soluciones personalizadas',
      'Transferencia tecnológica',
      'Optimización de procesos',
      'Ventaja competitiva sostenible'
    ],
    cta: 'Explorar Soluciones',
    href: '/soluciones/empresas'
  },
  {
    id: 'universidades',
    title: 'Para Universidades y Centros',
    description: 'Llevamos tu investigación más allá del laboratorio. Somos el puente que convierte tus descubrimientos en soluciones de mercado.',
    icon: GraduationCap,
    color: 'aqua-metalico',
    benefits: [
      'Transferencia tecnológica efectiva',
      'Comercialización de PI',
      'Vínculos industria-academia',
      'Spin-offs empresariales',
      'Impacto social medible'
    ],
    cta: 'Comercializar Investigación',
    href: '/soluciones/universidades'
  }
]

export default function SolucionesPage() {
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
              Soluciones para cada <span className="text-gradient-metal">Innovador</span>
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              Conectamos a todos los actores del ecosistema de innovación con soluciones 
              específicas diseñadas para maximizar el impacto y el retorno.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '4', label: 'Segmentos Especializados' },
                { number: '360°', label: 'Soluciones Integrales' },
                { number: '100+', label: 'Empresas Conectadas' },
                { number: '95%', label: 'Tasa de Éxito' },
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

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-8 h-full flex flex-col"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-lg bg-${solution.color}/20 flex-shrink-0`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-plateado-cromado mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gris-claro/80">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-plateado-cromado mb-4">
                    Beneficios Clave:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gris-claro/70">
                        <div className={`w-2 h-2 rounded-full bg-${solution.color} mt-2 flex-shrink-0`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={solution.href} className="mt-auto">
                  <button className="metal-button w-full group">
                    {solution.cta}
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nuestro <span className="text-gradient-metal">Proceso</span> de Trabajo
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados exitosos para cada tipo de cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnóstico',
                description: 'Análisis profundo de necesidades, objetivos y contexto específico.'
              },
              {
                step: '02',
                title: 'Estrategia',
                description: 'Diseño de solución personalizada con roadmap y métricas claras.'
              },
              {
                step: '03',
                title: 'Ejecución',
                description: 'Implementación con acompañamiento continuo y seguimiento de resultados.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-black text-plateado-cromado mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-plateado-cromado mb-3">
                  {process.title}
                </h3>
                <p className="text-gris-claro/70">
                  {process.description}
                </p>
              </motion.div>
            ))}
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
              ¿Cuál es tu <span className="text-gradient-metal">perfil</span> de innovador?
            </h2>
            <p className="text-xl text-gris-claro/80 mb-8">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos específicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="metal-button px-8 py-4">
                  Agendar Consulta Gratuita
                </button>
              </Link>
              <Link href="/ecosistema">
                <button className="px-8 py-4 rounded-lg border-2 border-plateado-cromado text-plateado-cromado font-semibold hover:bg-plateado-cromado/10 transition-all duration-300">
                  Conocer el Ecosistema
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}