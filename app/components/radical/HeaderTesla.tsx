'use client'

import { useState } from 'react'

const HeaderTesla = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/ecosistema', label: 'Ecosistema' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/impacto', label: 'Impacto' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/nosotros', label: 'Nosotros' },
  ]

  return (
    <header className="fixed top-0 w-full bg-bg-primary/80 backdrop-blur-md border-b border-blue-600/10 z-50 transition-smooth">
      <nav className="container mx-auto h-16 flex items-center justify-between">
        {/* Logo estilo Tesla auténtico */}
        <a href="/" className="flex items-center gap-3 hover-glow transition-smooth">
          <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
            <span className="text-bg-primary font-bold text-lg">V</span>
          </div>
          <span className="text-body text-primary font-semibold tracking-wide">VIRETEC</span>
        </a>
        
        {/* Navigation desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-small text-secondary hover:text-blue-400 transition-fast font-medium"
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href="/contacto" 
            className="btn btn-primary btn-sm"
          >
            Contacto
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary hover:text-primary transition-fast"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-fast transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-fast ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-fast transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-card border-t border-blue-600/20">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="block text-body text-secondary hover:text-blue-400 transition-fast"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-4">
              <a 
                href="/contacto"
                className="btn btn-primary btn-sm w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Header alternativo estilo X (Twitter)
export const HeaderXStyle = () => {
  return (
    <header className="fixed top-0 w-full bg-bg-primary/90 backdrop-blur-sm z-50">
      <div className="container h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:text-blue-400 transition-fast">
          <div className="w-6 h-6 bg-blue-500 flex items-center justify-center">
            <span className="text-bg-primary font-bold text-sm">V</span>
          </div>
          <span className="text-body text-primary font-medium">VIRETEC</span>
        </a>
        
        <div className="flex items-center gap-6">
          <a href="/ecosistema" className="hidden md:block text-small text-secondary hover:text-blue-400 transition-fast">
            Ecosistema
          </a>
          <a href="/impacto" className="hidden md:block text-small text-secondary hover:text-blue-400 transition-fast">
            Impacto
          </a>
          <a href="/contacto" className="btn btn-secondary btn-sm">
            Contacto
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeaderTesla