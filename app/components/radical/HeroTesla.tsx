import React from 'react'

// Componente de botón Tesla-style auténtico
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

// Hero principal estilo Tesla/SpaceX con concepto sustentable
const HeroTeslaAutentico = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center relative overflow-hidden">
      {/* Elementos de fondo sutiles (estilo SpaceX) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <div className="container mx-auto px-md relative z-10">
        <div className="max-w-4xl">
          {/* Badge superior */}
          <div className="mb-lg fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-blue-600/30 text-blue-400 text-small font-medium uppercase tracking-wide">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Venture Studio
            </span>
          </div>
          
          {/* Título principal con concepto sustentable */}
          <h1 className="text-hero text-primary mb-lg fade-in" style={{animationDelay: '0.2s'}}>
            El futuro es<br />
            <span className="text-blue-400">sustentable</span>
          </h1>
          
          {/* Subtítulo con DNA ecológico */}
          <p className="text-subtitle text-secondary max-w-3xl mb-xl fade-in" style={{animationDelay: '0.4s'}}>
            Aceleramos la transición hacia un futuro sustentable. Transformamos ideas 
            innovadoras en empresas que resuelven los desafíos ambientales y sociales 
            más importantes de nuestro tiempo.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-xl fade-in" style={{animationDelay: '0.6s'}}>
            <TeslaButton variant="primary" size="lg" href="/ecosistema">
              Explora Nuestro Ecosistema
            </TeslaButton>
            <TeslaButton variant="secondary" size="lg" href="/contacto">
              Agenda una Reunión
            </TeslaButton>
          </div>
          
          {/* Métricas de impacto sustentable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center md:text-left">
              <div className="text-heading text-blue-400 font-bold">$127M</div>
              <div className="text-small text-muted uppercase tracking-wide">Capital Impacto</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-blue-400 font-bold">45+</div>
              <div className="text-small text-muted uppercase tracking-wide">Startups Sustentables</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-blue-400 font-bold">3,500+</div>
              <div className="text-small text-muted uppercase tracking-wide">Empleos Verdes</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-blue-400 font-bold">Carbon-</div>
              <div className="text-small text-muted uppercase tracking-wide">Neutral 2030</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{animationDelay: '1s'}}>
        <div className="flex flex-col items-center gap-2 text-muted">
          <div className="text-small uppercase tracking-wide">Scroll</div>
          <div className="w-px h-8 bg-blue-500/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

// Hero alternativo: Estilo SpaceX puro 
export const HeroSpaceXPuro = () => {
  return (
    <section className="min-h-screen bg-bg-primary">
      <div className="h-screen flex">
        {/* Contenido principal */}
        <div className="flex-1 flex items-center justify-center p-lg">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-hero text-primary mb-lg">
              Innovación<br />
              <span className="text-blue-400">regenerativa</span>
            </h1>
            
            <p className="text-body text-secondary mb-lg leading-relaxed">
              No solo reducimos el impacto negativo. Creamos empresas que 
              regeneran ecosistemas, comunidades y economías.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <TeslaButton variant="primary" size="lg">
                Misión Sustentable
              </TeslaButton>
              <TeslaButton variant="ghost" size="lg">
                Ver Impacto
              </TeslaButton>
            </div>
          </div>
        </div>
        
        {/* Sidebar con métricas de sustentabilidad */}
        <div className="w-80 bg-bg-card border-l border-blue-600/20 p-lg flex flex-col justify-center">
          <div className="space-y-lg">
            <div>
              <div className="text-display text-blue-400">Net+</div>
              <div className="text-small text-muted">Impacto Positivo</div>
              <div className="w-full h-px bg-blue-600/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-blue-400">15x</div>
              <div className="text-small text-muted">ROI Ambiental</div>
              <div className="w-full h-px bg-blue-600/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-blue-400">2030</div>
              <div className="text-small text-muted">Carbon Neutral</div>
              <div className="w-full h-px bg-blue-600/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-blue-400">∞</div>
              <div className="text-small text-muted">Economía Circular</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero minimalista extremo estilo X/Tesla
export const HeroXMinimal = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-md">
        {/* Logo/Badge */}
        <div className="mb-xl">
          <div className="inline-flex items-center gap-3 mb-lg">
            <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
              <span className="text-bg-primary font-bold text-lg">V</span>
            </div>
            <span className="text-body text-primary font-medium tracking-wide">VIRETEC</span>
          </div>
        </div>
        
        {/* Mensaje principal */}
        <h1 className="text-hero text-primary mb-lg">
          Regeneramos el planeta
        </h1>
        
        <p className="text-subtitle text-secondary mb-xl max-w-2xl mx-auto">
          Venture Studio → Triple Impacto → Futuro Sustentable
        </p>
        
        {/* CTA único */}
        <TeslaButton variant="primary" size="lg" href="/ecosistema">
          Únete a la Misión
        </TeslaButton>
      </div>
    </section>
  )
}

export default HeroTeslaAutentico