'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import Logo from '../molecules/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    ecosistema: [
      { label: 'Venture Lab', href: '/ecosistema/venture-lab' },
      { label: 'Venture Showcase', href: '/ecosistema/venture-showcase' },
      { label: 'Venture Capital', href: '/ecosistema/venture-capital' },
      { label: 'Venture Building', href: '/ecosistema/venture-building' },
    ],
    soluciones: [
      { label: 'Para Emprendedores', href: '/soluciones/emprendedores' },
      { label: 'Para Inversionistas', href: '/soluciones/inversionistas' },
      { label: 'Para Empresas', href: '/soluciones/empresas' },
      { label: 'Para Universidades', href: '/soluciones/universidades' },
    ],
    recursos: [
      { label: 'Blog', href: '/recursos/blog' },
      { label: 'Casos de Éxito', href: '/impacto' },
      { label: 'Eventos', href: '/recursos/eventos' },
      { label: 'Newsletter', href: '/recursos/newsletter' },
    ],
    empresa: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Equipo', href: '/nosotros#equipo' },
      { label: 'Carreras', href: '/nosotros/carreras' },
      { label: 'Contacto', href: '/contacto' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/viretec' },
    { icon: Twitter, href: 'https://twitter.com/viretec' },
    { icon: Linkedin, href: 'https://linkedin.com/company/viretec' },
    { icon: Instagram, href: 'https://instagram.com/viretec' },
  ]

  return (
    <footer className="bg-negro-azabache border-t border-gris-titanio/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo 
                size="lg" 
                variant="footer" 
                showText={true}
                className="transition-all duration-300"
              />
            </div>
            <p className="text-gris-claro/70 mb-6 max-w-sm">
              Innovamos para mejorar el mundo y somos felices haciéndolo. 
              Transformamos ideas en proyectos rentables con impacto sustentable.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Suscríbete a nuestro newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="metal-input flex-1"
                />
                <button type="submit" className="px-4 py-2 bg-azul-acero text-negro-carbon rounded-lg hover:bg-aqua-metalico transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-plateado-cromado">Ecosistema</h4>
            <ul className="space-y-2">
              {footerLinks.ecosistema.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gris-claro/70 hover:text-aqua-metalico transition-all duration-500 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-plateado-cromado">Soluciones</h4>
            <ul className="space-y-2">
              {footerLinks.soluciones.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gris-claro/70 hover:text-aqua-metalico transition-all duration-500 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-plateado-cromado">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gris-claro/70 hover:text-aqua-metalico transition-all duration-500 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-plateado-cromado">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gris-claro/70 hover:text-aqua-metalico transition-all duration-500 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gris-titanio/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gris-claro/60 text-sm text-center md:text-left">
              © {currentYear} Viretec. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gris-titanio/20 rounded-full flex items-center justify-center hover:bg-azul-titanio/30 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gris-claro hover:text-plateado-cromado" />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacidad" className="text-gris-claro/60 hover:text-plateado-cromado transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-gris-claro/60 hover:text-plateado-cromado transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="text-gris-claro/60 hover:text-plateado-cromado transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
