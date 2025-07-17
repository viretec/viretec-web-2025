'use client'

import { useState } from 'react'
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/ecosistema', label: 'ECOSISTEMA' },
    { href: '/soluciones', label: 'SOLUCIONES' },
    { href: '/impacto', label: 'IMPACTO' },
    { href: '/recursos', label: 'RECURSOS' },
    { href: '/nosotros', label: 'NOSOTROS' },
  ]

  return (
    <header className="fixed top-0 w-full bg-carbon/80 backdrop-blur-sm border-b border-accent/20 z-50">
      <nav className="container mx-auto h-16 flex items-center justify-between">
        {/* Logo brutal */}
        <a href="/" className="text-body font-bold text-white tracking-wider hover-accent transition-fast">
          VIRETEC
        </a>
        
        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-body-sm text-silver hover-accent transition-fast font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
          
          <Button size="sm" variant="filled" href="/contacto">
            CONTACTO
          </Button>
        </div>
        
        {/* Menu mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-silver hover-accent transition-fast"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-fast transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-fast ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-fast transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-steel border-t border-accent/20">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="block text-body text-silver hover-accent transition-fast"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-4">
              <Button 
                size="sm" 
                variant="filled" 
                href="/contacto"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTO
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Header alternativo aún más minimalista
export const HeaderMinimal = () => {
  return (
    <header className="fixed top-0 w-full bg-void/50 backdrop-blur-sm z-50">
      <div className="container h-12 flex items-center justify-between">
        <a href="/" className="text-body font-black text-white">VIRETEC</a>
        <a href="/contacto" className="text-body-sm text-accent font-bold">CONTACTO</a>
      </div>
    </header>
  )
}

// Header con logo gráfico (si se mantiene la V)
export const HeaderWithLogo = () => {
  return (
    <header className="fixed top-0 w-full bg-carbon/80 backdrop-blur-sm border-b border-accent/20 z-50">
      <nav className="container h-16 flex items-center justify-between">
        {/* Logo con V + texto */}
        <a href="/" className="flex items-center gap-3 hover-scale transition-fast">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <span className="text-carbon font-black text-lg">V</span>
          </div>
          <span className="text-body font-bold text-white tracking-wider">VIRETEC</span>
        </a>
        
        <div className="flex items-center gap-6">
          <a href="/ecosistema" className="hidden md:block text-body-sm text-silver hover-accent transition-fast">
            ECOSISTEMA
          </a>
          <a href="/impacto" className="hidden md:block text-body-sm text-silver hover-accent transition-fast">
            IMPACTO
          </a>
          <Button size="sm" variant="filled" href="/contacto">
            CONTACTO
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header