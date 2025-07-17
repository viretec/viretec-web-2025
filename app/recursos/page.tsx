'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Download, Video, Calendar, Search, Filter, ArrowRight } from 'lucide-react'

const featuredArticles = [
  {
    id: 1,
    title: 'El Futuro de los Venture Studios en Latinoamérica',
    excerpt: 'Análisis profundo sobre cómo los venture studios están transformando el ecosistema de innovación en la región.',
    category: 'Tendencias',
    readTime: '8 min',
    date: '2025-06-01',
    featured: true,
    type: 'article'
  },
  {
    id: 2,
    title: 'Guía Completa para Validar tu Startup Tecnológica',
    excerpt: 'Metodología paso a paso para validar tu idea de negocio antes de invertir tiempo y recursos.',
    category: 'Emprendimiento',
    readTime: '12 min',
    date: '2025-05-28',
    featured: true,
    type: 'guide'
  },
  {
    id: 3,
    title: 'Webinar: Inversión de Impacto en México 2025',
    excerpt: 'Conversatorio con expertos sobre las tendencias de inversión sostenible en el país.',
    category: 'Webinar',
    readTime: '45 min',
    date: '2025-06-15',
    featured: false,
    type: 'video'
  }
]

const articles = [
  {
    id: 4,
    title: 'Cómo Estructurar una Ronda Seed Exitosa',
    excerpt: 'Los elementos clave que los inversionistas buscan en las primeras rondas de financiamiento.',
    category: 'Inversión',
    readTime: '6 min',
    date: '2025-05-25',
    type: 'article'
  },
  {
    id: 5,
    title: 'Transferencia Tecnológica: Del Lab al Mercado',
    excerpt: 'Estrategias para comercializar exitosamente investigación universitaria.',
    category: 'Transferencia Tech',
    readTime: '10 min',
    date: '2025-05-22',
    type: 'article'
  },
  {
    id: 6,
    title: 'Reporte: Estado de la Innovación en México 2025',
    excerpt: 'Análisis completo del ecosistema de innovación mexicano con datos exclusivos.',
    category: 'Reportes',
    readTime: '20 min',
    date: '2025-05-20',
    type: 'report'
  },
  {
    id: 7,
    title: 'Sostenibilidad y Rentabilidad: ¿Es Posible?',
    excerpt: 'Casos de estudio de empresas que logran impacto social y ambiental sin sacrificar rentabilidad.',
    category: 'Sustentabilidad',
    readTime: '8 min',
    date: '2025-05-18',
    type: 'article'
  },
  {
    id: 8,
    title: 'Herramientas Gratuitas para Startups Tecnológicas',
    excerpt: 'Lista curada de recursos esenciales para emprendedores en etapa temprana.',
    category: 'Recursos',
    readTime: '5 min',
    date: '2025-05-15',
    type: 'guide'
  }
]

const categories = ['Todos', 'Emprendimiento', 'Inversión', 'Tendencias', 'Transferencia Tech', 'Sustentabilidad', 'Recursos']

const resourceTypes = [
  { icon: BookOpen, label: 'Artículos', count: 45, type: 'article' },
  { icon: Download, label: 'Reportes', count: 12, type: 'report' },
  { icon: Video, label: 'Webinars', count: 20, type: 'video' },
  { icon: Calendar, label: 'Eventos', count: 8, type: 'event' }
]

export default function RecursosPage() {
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
              Centro de <span className="text-gradient-metal">Recursos</span>
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              Conocimiento experto, tendencias del mercado y herramientas prácticas 
              para impulsar tu proyecto de innovación.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Buscar artículos, guías, reportes..."
                className="w-full metal-input pl-12 pr-4 py-4 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gris-titanio" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-12 bg-negro-azabache">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {resourceTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center metal-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <type.icon className="w-8 h-8 text-azul-acero mx-auto mb-3" />
                <div className="text-2xl font-bold text-plateado-cromado mb-1">
                  {type.count}
                </div>
                <div className="text-plateado-cromado font-medium">
                  {type.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-display-md font-bold mb-6">
              Contenido <span className="text-gradient-metal">Destacado</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-azul-acero/30 to-dorado-metalico/30 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-plateado-cromado/50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-azul-acero/20 text-azul-acero text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gris-claro/60 text-sm">
                      {article.readTime} lectura
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-plateado-cromado mb-3 group-hover:text-plateado-cromado transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gris-claro/70 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gris-claro/60 text-sm">
                      {new Date(article.date).toLocaleDateString('es-MX')}
                    </span>
                    <Link href={`/recursos/${article.id}`}>
                      <span className="text-azul-acero font-medium group-hover:text-aqua-metalico transition-colors cursor-pointer">
                        Leer más →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-negro-azabache">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <h2 className="text-display-md font-bold">
                Últimos <span className="text-gradient-metal">Artículos</span>
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-lg border border-gris-titanio text-gris-claro text-sm hover:border-azul-acero hover:text-azul-acero transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="metal-card p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-plateado-cromado/20 text-plateado-cromado text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-gris-claro/60 text-sm">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-plateado-cromado mb-3 group-hover:text-plateado-cromado transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gris-claro/70 mb-4 text-sm">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gris-claro/60 text-xs">
                    {new Date(article.date).toLocaleDateString('es-MX')}
                  </span>
                  <Link href={`/recursos/${article.id}`}>
                    <span className="text-azul-acero font-medium text-sm group-hover:text-aqua-metalico transition-colors cursor-pointer">
                      Leer →
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="metal-button px-8 py-4">
              Cargar Más Artículos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center metal-card p-12"
          >
            <h2 className="text-2xl font-bold text-plateado-cromado mb-4">
              Mantente <span className="text-gradient-metal">Actualizado</span>
            </h2>
            <p className="text-gris-claro/80 mb-8">
              Recibe nuestros mejores artículos, reportes exclusivos y tendencias del 
              ecosistema de innovación directamente en tu email.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 metal-input"
              />
              <button className="metal-button px-6 py-3">
                Suscribirse
              </button>
            </div>
            
            <p className="text-gris-claro/60 text-sm mt-4">
              Sin spam. Únicamente contenido de valor. Puedes cancelar en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}