import React from 'react'

// Componente de botón Tesla-style
const TeslaButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  className = '' 
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}) => {
  const baseClasses = 'btn'
  const variantClasses = variant === 'primary' ? 'btn-primary' : 
                        variant === 'secondary' ? 'btn-secondary' : 'btn-ghost'
  const sizeClasses = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : ''
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button onClick={onClick} className={classes}>{children}</button>
}

// Hero inspirado en Homely con estética Tesla
const HeroHomelyInspired = () => {
  return (
    <section className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Elementos de fondo sutiles estilo Tesla */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern muy sutil */}
      <div className="absolute inset-0 opacity-3" 
           style={{
             backgroundImage: `radial-gradient(circle, #3b82f6 0.5px, transparent 0.5px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-md relative z-10 h-screen flex flex-col">
        {/* Header section con badge */}
        <div className="pt-24 pb-8">
          <div className="fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card/50 backdrop-blur-sm border border-blue-600/20 text-blue-400 text-small font-medium uppercase tracking-wide rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Venture Studio
            </span>
          </div>
        </div>

        {/* Contenido principal - layout Homely style */}
        <div className="flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-xl items-center w-full">
            
            {/* Lado izquierdo - Contenido principal */}
            <div className="space-y-lg">
              {/* Ubicación/contexto */}
              <div className="fade-in">
                <p className="text-small text-muted uppercase tracking-wide font-medium">
                  Ciudad de México, MX
                </p>
              </div>
              
              {/* Título principal estilo Homely */}
              <div className="space-y-md fade-in" style={{animationDelay: '0.2s'}}>
                <h1 className="text-hero text-primary leading-tight">
                  Futuristic<br />
                  <span className="text-blue-400">Impact</span>
                </h1>
              </div>
              
              {/* Botones estilo Homely */}
              <div className="flex gap-4 fade-in" style={{animationDelay: '0.4s'}}>
                <TeslaButton variant="primary" size="lg" href="/ecosistema">
                  Conoce Más
                </TeslaButton>
                <TeslaButton variant="ghost" size="lg" href="/contacto">
                  Agenda Reunión
                </TeslaButton>
              </div>
            </div>

            {/* Lado derecho - Elemento visual futurista */}
            <div className="relative fade-in" style={{animationDelay: '0.6s'}}>
              {/* Placeholder para elemento visual - podría ser una imagen o elemento 3D */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Elemento central futurista */}
                <div className="relative">
                  {/* Círculo principal */}
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-600/30">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center glow-blue">
                        <span className="text-white font-bold text-2xl">V</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elementos orbitales */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-400/40"></div>
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500/30 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300/25 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de métricas estilo Homely (abajo) */}
        <div className="pb-xl">
          <div className="fade-in" style={{animationDelay: '0.8s'}}>
            {/* Grid de métricas como cards elegantes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Card 1 - Capital */}
              <div className="bg-bg-card/30 backdrop-blur-sm border border-blue-600/10 p-6 rounded-xl hover:border-blue-600/30 transition-smooth group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-small text-muted uppercase tracking-wide">Capital</span>
                  </div>
                  <div className="text-heading text-blue-400 font-bold">$127M</div>
                  <div className="text-small text-secondary">Impacto gestionado</div>
                </div>
              </div>

              {/* Card 2 - Startups */}
              <div className="bg-bg-card/30 backdrop-blur-sm border border-blue-600/10 p-6 rounded-xl hover:border-blue-600/30 transition-smooth group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-small text-muted uppercase tracking-wide">Startups</span>
                  </div>
                  <div className="text-heading text-blue-400 font-bold">45+</div>
                  <div className="text-small text-secondary">En portafolio activo</div>
                </div>
              </div>

              {/* Card 3 - Empleos */}
              <div className="bg-bg-card/30 backdrop-blur-sm border border-blue-600/10 p-6 rounded-xl hover:border-blue-600/30 transition-smooth group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-small text-muted uppercase tracking-wide">Empleos</span>
                  </div>
                  <div className="text-heading text-blue-400 font-bold">3,500+</div>
                  <div className="text-small text-secondary">Empleos verdes creados</div>
                </div>
              </div>

              {/* Card 4 - Impacto */}
              <div className="bg-bg-card/30 backdrop-blur-sm border border-blue-600/10 p-6 rounded-xl hover:border-blue-600/30 transition-smooth group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-small text-muted uppercase tracking-wide">Meta</span>
                  </div>
                  <div className="text-heading text-blue-400 font-bold">2030</div>
                  <div className="text-small text-secondary">Carbon neutral</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll sutil */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 fade-in" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center gap-2 text-muted">
            <div className="w-px h-6 bg-blue-500/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Variante alternativa con layout más similar a Homely
export const HeroHomelyExact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-md relative z-10 h-screen flex flex-col justify-between">
        
        {/* Header con navegación estilo Homely */}
        <div className="pt-8 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-primary font-semibold">Viretec</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-small text-muted">+52-449-1480</span>
              <TeslaButton variant="ghost" size="sm">Menú</TeslaButton>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <div className="max-w-xl">
              <div className="space-y-md mb-lg">
                <p className="text-small text-muted uppercase tracking-wide">
                  Ciudad de México, MX
                </p>
                <h1 className="text-hero text-primary">
                  Futuristic<br />
                  Impact
                </h1>
              </div>
              
              <div className="flex gap-4">
                <TeslaButton variant="primary">Conoce Más</TeslaButton>
                <TeslaButton variant="ghost">Ver Portfolio</TeslaButton>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de métricas como en Homely */}
        <div className="pb-xl">
          <div className="flex justify-center">
            <div className="inline-flex bg-bg-card/40 backdrop-blur-md border border-blue-600/20 rounded-2xl p-2">
              <div className="grid grid-cols-4 gap-1">
                
                <div className="bg-bg-primary/50 backdrop-blur-sm p-4 rounded-xl text-center min-w-[120px]">
                  <div className="w-6 h-6 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-small text-muted mb-1">Capital</div>
                  <div className="text-body text-blue-400 font-semibold">$127M</div>
                </div>

                <div className="bg-bg-primary/50 backdrop-blur-sm p-4 rounded-xl text-center min-w-[120px]">
                  <div className="w-6 h-6 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-small text-muted mb-1">Startups</div>
                  <div className="text-body text-blue-400 font-semibold">45+</div>
                </div>

                <div className="bg-bg-primary/50 backdrop-blur-sm p-4 rounded-xl text-center min-w-[120px]">
                  <div className="w-6 h-6 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-small text-muted mb-1">Empleos</div>
                  <div className="text-body text-blue-400 font-semibold">3,500+</div>
                </div>

                <div className="bg-bg-primary/50 backdrop-blur-sm p-4 rounded-xl text-center min-w-[120px]">
                  <div className="w-6 h-6 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-small text-muted mb-1">Meta 2030</div>
                  <div className="text-body text-blue-400 font-semibold">Carbon-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHomelyInspired