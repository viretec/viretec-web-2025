'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Microscope, Presentation, Rocket, TrendingUp } from 'lucide-react'
import { ctas } from '@/app/data/ctas'

// --- Data (could be moved to a separate file) ---
const businessModels = [
  {
    icon: Presentation,
    title: 'Venture Showcase',
    description: 'Conectamos proyectos innovadores validados con inversionistas y empresas, presentando las mejores oportunidades de inversión con triple impacto.',
    href: '/ecosistema#showcase',
  },
  {
    icon: Microscope,
    title: 'Venture Lab',
    description: 'Transformamos ideas en proyectos viables mediante nuestra metodología probada de validación técnica, de mercado y de impacto.',
    href: '/ecosistema#lab',
  },
  {
    icon: Rocket,
    title: 'Venture Building',
    description: 'Construimos y escalamos startups de alto impacto, con un acompañamiento integral desde la idea hasta el crecimiento exponencial.',
    href: '/ecosistema#building',
  },
  {
    icon: TrendingUp,
    title: 'Venture Capital',
    description: 'Gestionamos capital para maximizar el retorno financiero y el impacto positivo, invirtiendo en proyectos de triple impacto.',
    href: '/ecosistema#capital',
  }
];

// --- Main Services Component ---

const Services = () => {
  // Define data inside the component to ensure it's only accessed during render
  const audienceCtas = [
    { title: 'Emprendedores', subtitle: 'Valida y escala tu innovación', href: ctas.emprendedores.href, cta: 'Evaluar Proyecto' },
    { title: 'Inversionistas', subtitle: 'Deal flow exclusivo y pre-validado', href: ctas.inversionistas.href, cta: 'Ver Oportunidades' },
    { title: 'Empresas', subtitle: 'Soluciones innovadoras para retos', href: ctas.empresas.href, cta: 'Resolver Desafíos' },
    { title: 'Universidades', subtitle: 'Monetiza tu propiedad intelectual', href: ctas.universidades.href, cta: 'Evaluar IP' },
  ];

  return (
    <section id="soluciones" className="relative bg-negro-carbon">
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
            Nuestro <span className="text-gradient-metal">Ecosistema de Innovación</span>
          </h2>
          <p className="text-lg sm:text-xl text-gris-texto/80 max-w-3xl mx-auto">
            Un sistema integral que transforma ideas en empresas de alto impacto, 
            conectando talento, capital y oportunidades de mercado.
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {businessModels.map((model, index) => (
            <EcosystemCard key={model.title} {...model} index={index} />
          ))}
        </div>

        {/* Audience CTAs Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-plateado-cromado">
            ¿Cuál es tu rol en la innovación?
          </h3>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCtas.map((cta, index) => (
            <AudienceCard key={cta.title} {...cta} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
