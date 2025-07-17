'use client'

import Logo from '../molecules/Logo'

// Componente para logos en cards de servicios/productos
export const ServiceCardLogo = ({ className = '' }: { className?: string }) => (
  <Logo 
    size="sm" 
    variant="card" 
    showText={false}
    className={`transition-all duration-400 ${className}`}
  />
)

// Componente para logos en el hero
export const HeroLogo = ({ className = '' }: { className?: string }) => (
  <Logo 
    size="xl" 
    variant="hero" 
    showText={true}
    className={`transition-all duration-700 ${className}`}
  />
)

// Componente para logos en headers de sección
export const SectionHeaderLogo = ({ className = '' }: { className?: string }) => (
  <Logo 
    size="md" 
    variant="card" 
    showText={false}
    className={`transition-all duration-300 ${className}`}
  />
)

// Componente para logos pequeños (breadcrumbs, etc.)
export const MiniLogo = ({ className = '' }: { className?: string }) => (
  <Logo 
    size="sm" 
    variant="header" 
    showText={false}
    className={`transition-all duration-200 ${className}`}
  />
)

// Exportar también el Logo principal
export { default as Logo } from '../molecules/Logo'