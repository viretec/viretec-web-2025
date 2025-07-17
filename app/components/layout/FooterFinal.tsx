import React from 'react'
import Link from 'next/link'
import { Button, Text, Heading } from '@/app/components/ui/ComponentesBase'

// === FOOTER FINAL VIRETEC 2025 ===
const FooterFinal = () => {
  // Enlaces organizados por categorías
  const footerLinks = {
    empresa: {
      title: 'Empresa',
      links: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Equipo', href: '/equipo' },
        { name: 'Carreras', href: '/carreras' },
        { name: 'Prensa', href: '/prensa' }
      ]
    },
    servicios: {
      title: 'Servicios',
      links: [
        { name: 'Venture Building', href: '/soluciones/venture-building' },
        { name: 'Consultoría', href: '/soluciones/consultoria' },
        { name: 'Inversión', href: '/soluciones/inversion' },
        { name: 'Aceleración', href: '/soluciones/aceleracion' }
      ]
    },
    recursos: {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Reportes', href: '/reportes' },
        { name: 'Eventos', href: '/eventos' },
        { name: 'Webinars', href: '/webinars' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacidad', href: '/privacidad' },
        { name: 'Términos', href: '/terminos' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  }

  // Redes sociales
  const socialMedia = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/viretec',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/viretec',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/viretec',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      
      {/* Sección Principal */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Logo y Descripción */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">V</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white tracking-tight">
                    VIRETEC
                  </span>
                  <div className="text-xs text-blue-400 uppercase tracking-widest font-medium">
                    Venture Studio
                  </div>
                </div>
              </Link>

              {/* Descripción */}
              <Text className="mb-6 leading-relaxed">
                Aceleramos la transición hacia un futuro sustentable. Transformamos ideas 
                innovadoras en empresas que resuelven los desafíos más importantes de nuestro tiempo.
              </Text>

              {/* Contacto Directo */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-sm">hola@viretec.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Ciudad de México, México</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-white/10 pt-8">
              <Heading level={4} size="heading" className="mb-4">
                Newsletter
              </Heading>
              <Text size="small" className="mb-4">
                Recibe insights sobre innovación sustentable y oportunidades de inversión.
              </Text>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="input flex-1 text-sm"
                />
                <Button variant="primary" size="sm">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <Heading level={4} size="heading" className="mb-6">
                    {section.title}
                  </Heading>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Línea Separadora */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>© 2025 VIRETEC. Todos los derechos reservados.</span>
            <span className="hidden md:block">•</span>
            <span className="text-blue-400">Construyendo el futuro sustentable</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 mr-2">Síguenos:</span>
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-blue-500/10 rounded"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Efecto de gradiente inferior */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-50"></div>
    </footer>
  )
}

export default FooterFinal