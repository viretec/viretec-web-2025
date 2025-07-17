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

// Hero principal estilo Tesla Verde
const HeroTeslaVerde = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center relative overflow-hidden">
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-green-glow/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <div className="container mx-auto px-md relative z-10">
        <div className="max-w-4xl">
          {/* Badge/Label superior */}
          <div className="mb-lg fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-green-primary/30 text-green-primary text-small font-medium uppercase tracking-wide">
              <div className="w-2 h-2 bg-green-primary rounded-full animate-pulse"></div>
              Venture Studio
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-hero text-primary mb-lg fade-in" style={{animationDelay: '0.2s'}}>
            Innovamos para<br />
            <span className="text-green-primary">mejorar el mundo</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-subtitle text-secondary max-w-3xl mb-xl fade-in" style={{animationDelay: '0.4s'}}>
            Transformamos ideas innovadoras en empresas de triple impacto. 
            Conectamos tecnología, capital y talento para resolver los desafíos 
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
          
          {/* Métricas en línea */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center md:text-left">
              <div className="text-heading text-green-primary font-bold">$127M</div>
              <div className="text-small text-muted uppercase tracking-wide">Gestionados</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-green-primary font-bold">45+</div>
              <div className="text-small text-muted uppercase tracking-wide">Startups</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-green-primary font-bold">3,500+</div>
              <div className="text-small text-muted uppercase tracking-wide">Empleos</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-heading text-green-primary font-bold">89%</div>
              <div className="text-small text-muted uppercase tracking-wide">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{animationDelay: '1s'}}>
        <div className="flex flex-col items-center gap-2 text-muted">
          <div className="text-small uppercase tracking-wide">Scroll</div>
          <div className="w-px h-8 bg-green-primary/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

// Hero alternativo: Estilo SpaceX con sidebar
export const HeroSpaceXStyle = () => {
  return (
    <section className="min-h-screen bg-bg-primary">
      <div className="h-screen flex">
        {/* Contenido principal */}
        <div className="flex-1 flex items-center justify-center p-lg">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-hero text-primary mb-lg">
              El futuro de la<br />
              <span className="text-green-primary">innovación sustentable</span>
            </h1>
            
            <p className="text-body text-secondary mb-lg leading-relaxed">
              Viretec es el Venture Studio que acelera la transición hacia 
              un futuro más sustentable a través de la innovación tecnológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <TeslaButton variant="primary" size="lg">
                Comenzar
              </TeslaButton>
              <TeslaButton variant="ghost" size="lg">
                Ver Demo
              </TeslaButton>
            </div>
          </div>
        </div>
        
        {/* Sidebar con métricas */}
        <div className="w-80 bg-bg-card border-l border-green-primary/20 p-lg flex flex-col justify-center">
          <div className="space-y-lg">
            <div>
              <div className="text-display text-green-primary">$127M</div>
              <div className="text-small text-muted">Capital gestionado</div>
              <div className="w-full h-px bg-green-primary/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-green-primary">45+</div>
              <div className="text-small text-muted">Startups en portafolio</div>
              <div className="w-full h-px bg-green-primary/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-green-primary">3,500+</div>
              <div className="text-small text-muted">Empleos generados</div>
              <div className="w-full h-px bg-green-primary/20 mt-2"></div>
            </div>
            
            <div>
              <div className="text-display text-green-primary">89%</div>
              <div className="text-small text-muted">Tasa de éxito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero minimalista extremo estilo Apple/Tesla
export const HeroMinimalTesla = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-md">
        {/* Logo/Badge */}
        <div className="mb-xl">
          <div className="inline-flex items-center gap-3 mb-lg">
            <div className="w-8 h-8 bg-green-primary flex items-center justify-center">
              <span className="text-bg-primary font-bold text-lg">V</span>
            </div>
            <span className="text-body text-primary font-medium tracking-wide">VIRETEC</span>
          </div>
        </div>
        
        {/* Mensaje principal */}
        <h1 className="text-hero text-primary mb-lg">
          Transformamos el futuro
        </h1>
        
        <p className="text-subtitle text-secondary mb-xl max-w-2xl mx-auto">
          Ideas → Innovación → Impacto Global
        </p>
        
        {/* CTA único */}
        <TeslaButton variant="primary" size="lg" href="/ecosistema">
          Conoce Nuestro Ecosistema
        </TeslaButton>
      </div>
    </section>
  )
}

export default HeroTeslaVerde