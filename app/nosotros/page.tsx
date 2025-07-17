'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Andrés López',
    position: 'CEO & Fundador',
    description: 'Líder visionario con 15+ años en innovación tecnológica y transferencia.',
    image: '/images/team/placeholder.jpg'
  },
  {
    name: 'Dra. María González',
    position: 'CTO',
    description: 'Experta en desarrollo tecnológico y validación de proyectos científicos.',
    image: '/images/team/placeholder.jpg'
  },
  {
    name: 'Lic. Carlos Ramírez',
    position: 'Head of Ventures',
    description: 'Especialista en desarrollo de negocios y escalamiento empresarial.',
    image: '/images/team/placeholder.jpg'
  },
  {
    name: 'Mtra. Ana Herrera',
    position: 'Investment Director',
    description: 'Gestora de inversiones con track record en fondos de capital emprendedor.',
    image: '/images/team/placeholder.jpg'
  }
]

const values = [
  {
    icon: Target,
    title: 'Impacto Medible',
    description: 'Cada proyecto debe generar valor económico, social y ambiental verificable.',
    color: 'azul-acero'
  },
  {
    icon: Heart,
    title: 'Pasión por Innovar',
    description: 'Amamos lo que hacemos y eso se refleja en cada proyecto que emprendemos.',
    color: 'plateado-cromado'
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Creemos en el poder de los ecosistemas y las alianzas estratégicas.',
    color: 'verde-cromo'
  },
  {
    icon: Eye,
    title: 'Transparencia',
    description: 'Comunicación clara y honesta en todas nuestras relaciones.',
    color: 'aqua-metalico'
  }
]

const milestones = [
  {
    year: '2009',
    title: 'Fundación',
    description: 'Iniciamos como consultora especializada en innovación tecnológica.'
  },
  {
    year: '2012',
    title: 'Primeros Éxitos',
    description: 'Lanzamos nuestros primeros 5 proyectos exitosos en biotecnología.'
  },
  {
    year: '2015',
    title: 'Expansión',
    description: 'Evolucionamos hacia el modelo de Venture Studio integral.'
  },
  {
    year: '2018',
    title: 'Reconocimiento',
    description: 'Fuimos reconocidos como el Venture Studio líder en México.'
  },
  {
    year: '2021',
    title: 'Crecimiento',
    description: 'Superamos los $10M USD en capital gestionado.'
  },
  {
    year: '2025',
    title: 'Futuro',
    description: 'Lanzamos nuestra nueva plataforma digital y expansión regional.'
  }
]

export default function NosotrosPage() {
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
              Somos <span className="text-gradient-metal">Viretec</span>
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              Desde 2009, transformamos ideas innovadoras en empresas exitosas que 
              mejoran el mundo. Somos pioneros del modelo Venture Studio en México.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '15+', label: 'Años de Experiencia' },
                { number: '50+', label: 'Proyectos Exitosos' },
                { number: '200+', label: 'Innovadores Apoyados' },
                { number: '$10M+', label: 'Capital Gestionado' },
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="metal-card p-8"
            >
              <Target className="w-12 h-12 text-azul-acero mb-6" />
              <h2 className="text-2xl font-bold text-plateado-cromado mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gris-claro/80 leading-relaxed">
                Transformar ideas innovadoras en proyectos rentables y con impacto sustentable. 
                Nos dedicamos a desarrollar nuevas oportunidades de negocio que, a través de 
                soluciones tecnológicas, aborden los retos ambientales, sociales y tecnológicos 
                de nuestro planeta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="metal-card p-8"
            >
              <Eye className="w-12 h-12 text-plateado-cromado mb-6" />
              <h2 className="text-2xl font-bold text-plateado-cromado mb-4">
                Nuestra Visión
              </h2>
              <p className="text-gris-claro/80 leading-relaxed">
                Ser un referente en la gestión y el desarrollo de proyectos de innovación 
                tecnológica en México, reconocidos por nuestra capacidad para crear soluciones 
                sustentables y por nuestro compromiso con el progreso social y ambiental.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros <span className="text-gradient-metal">Valores</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que emprendemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-${value.color}/20 flex items-center justify-center mb-4`}>
                  <value.icon className={`w-8 h-8 text-${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-plateado-cromado mb-3">
                  {value.title}
                </h3>
                <p className="text-gris-claro/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Nuestro <span className="text-gradient-metal">Journey</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              15 años de historia, crecimiento e impacto en el ecosistema de innovación.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-azul-acero via-dorado-metalico to-verde-cromo" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="metal-card p-6">
                      <div className="text-2xl font-bold text-plateado-cromado mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-plateado-cromado mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gris-claro/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-plateado-cromado rounded-full border-4 border-negro-carbon" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Nuestro <span className="text-gradient-metal">Equipo</span>
            </h2>
            <p className="text-xl text-gris-claro/80 max-w-3xl mx-auto">
              Expertos apasionados por la innovación y comprometidos con el impacto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gris-titanio/20 mb-4 overflow-hidden">
                  {/* Placeholder for team photos */}
                  <div className="w-full h-full bg-gradient-to-br from-azul-acero/30 to-dorado-metalico/30 flex items-center justify-center">
                    <Users className="w-12 h-12 text-plateado-cromado/50" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-plateado-cromado mb-1 group-hover:text-plateado-cromado transition-colors">
                  {member.name}
                </h3>
                <p className="text-azul-acero text-sm mb-3">
                  {member.position}
                </p>
                <p className="text-gris-claro/70 text-sm">
                  {member.description}
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
              ¿Quieres <span className="text-gradient-metal">formar parte</span> de nuestro equipo?
            </h2>
            <p className="text-xl text-gris-claro/80 mb-8">
              Siempre estamos buscando talento excepcional que comparta nuestra pasión 
              por la innovación y el impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="metal-button px-8 py-4">
                Ver Oportunidades
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-plateado-cromado text-plateado-cromado font-semibold hover:bg-plateado-cromado/10 transition-all duration-300">
                Enviar CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}