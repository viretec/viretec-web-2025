'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Award, Target } from 'lucide-react'

const About = () => {
  const milestones = [
    { year: '2009', event: 'El Inicio', description: 'Comenzamos con un sueño: innovar para mejorar el mundo' },
    { year: '2012', event: 'Primeros Proyectos', description: 'Lanzamos nuestros primeros proyectos de innovación tecnológica' },
    { year: '2015', event: 'Consolidación', description: 'Nos convertimos en referente de innovación en México' },
    { year: '2018', event: 'Venture Studio', description: 'Evolucionamos a un modelo de Venture Studio integral' },
    { year: '2021', event: 'Expansión', description: 'Ampliamos nuestro impacto a toda Latinoamérica' },
    { year: '2025', event: 'Liderazgo', description: 'Somos el Venture Studio líder en el ecosistema de innovación' },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/images/textures/Textura metalizada.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg font-bold mb-6">
            Nuestro <span className="text-gradient-metal">viaje del héroe</span>
          </h2>
          <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto mb-12">
            Desde 2009, hemos recorrido un camino de transformación, pasando de ser soñadores 
            a convertirnos en arquitectos del futuro de la innovación en Latinoamérica.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-azul-titanio via-azul-acero to-plateado-cromado" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="metal-card p-6">
                    <span className="text-plateado-cromado font-bold text-xl">{milestone.year}</span>
                    <h3 className="text-plateado-cromado font-bold text-lg mt-2">{milestone.event}</h3>
                    <p className="text-gris-claro/70 mt-2">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-plateado-cromado rounded-full border-4 border-negro-carbon shadow-metal-lg" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-12">
            Equipo <span className="text-gradient-metal">multidisciplinario</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="metal-card p-8">
              <Users className="w-12 h-12 text-azul-acero mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">7+ Expertos</h4>
              <p className="text-gris-claro/70">
                Profesionales en innovación, tecnología, negocios y sustentabilidad
              </p>
            </div>
            
            <div className="metal-card p-8">
              <Award className="w-12 h-12 text-plateado-cromado mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">15+ Años</h4>
              <p className="text-gris-claro/70">
                De experiencia transformando ideas en proyectos exitosos
              </p>
            </div>
            
            <div className="metal-card p-8">
              <Target className="w-12 h-12 text-verde-cromo mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Triple Impacto</h4>
              <p className="text-gris-claro/70">
                Económico, social y ambiental en cada proyecto
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/nosotros">
            <button className="metal-button">
              Conoce al Equipo Completo
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About
