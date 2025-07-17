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

// Componente de métrica estilo inmobiliario
const MetricCard = ({ 
  icon, 
  value, 
  label 
}: { 
  icon: React.ReactNode
  value: string
  label: string 
}) => (
  <div className="flex items-center gap-3 bg-bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 hover:border-blue-400/30 transition-smooth">
    <div className="text-blue-400 opacity-80">
      {icon}
    </div>
    <div>
      <div className="text-heading text-primary font-bold">{value}</div>
      <div className="text-small text-muted">{label}</div>
    </div>
  </div>
)

// Hero inspirado en diseño inmobiliario con estética Tesla
const HeroFuturisticHaven = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex flex-col relative overflow-hidden">
      {/* Elementos de fondo futuristas */}
      <div className="absolute inset-0">
        {/* Gradientes sutiles */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-400/5 to-transparent"></div>
        
        {/* Grid pattern muy sutil */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 container mx-auto px-md relative z-10 flex items-center">
        <div className="grid lg:grid-cols-2 gap-xl items-center w-full">
          
          {/* Lado izquierdo: Contenido principal */}
          <div className="space-y-lg">
            {/* Badge superior */}
            <div className="fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card/30 backdrop-blur-sm border border-blue-600/20 text-blue-400 text-small font-medium uppercase tracking-wider">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Venture Studio
              </span>
            </div>
            
            {/* Título principal estilo Futuristic Haven */}
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h1 className="text-hero text-primary leading-tight mb-6">
                Futuristic<br />
                <span className="text-blue-400">Impact</span>
              </h1>
              
              <p className="text-subtitle text-secondary leading-relaxed max-w-lg">
                Transformamos ideas visionarias en empresas que definen el futuro sustentable. 
                Donde la innovación encuentra su propósito.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{animationDelay: '0.4s'}}>
              <TeslaButton variant="primary" size="lg" href="/ecosistema">
                Explora Nuestro Ecosistema
              </TeslaButton>
              <TeslaButton variant="secondary" size="lg" href="/contacto">
                Agenda Reunión
              </TeslaButton>
            </div>
          </div>
          
          {/* Lado derecho: Visual futurista (sin imagen física) */}
          <div className="relative flex items-center justify-center min-h-96 fade-in" style={{animationDelay: '0.6s'}}>
            {/* Elementos visuales abstractos */}
            <div className="relative">
              {/* Círculo principal */}
              <div className="w-80 h-80 border border-blue-400/20 rounded-full flex items-center justify-center relative">
                <div className="w-60 h-60 border border-blue-400/30 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <div className="text-6xl text-blue-400 font-bold">V</div>
                  </div>
                </div>
                
                {/* Partículas orbitando */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute left-0 top-1/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
              </div>
              
              {/* Líneas de conexión */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 border-l border-blue-400/10 absolute rotate-45"></div>
                <div className="w-96 h-96 border-l border-blue-400/10 absolute -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Métricas estilo inmobiliario en la parte inferior */}
      <div className="container mx-auto px-md pb-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in" style={{animationDelay: '0.8s'}}>
          
          <MetricCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            }
            value="$127M"
            label="Capital Gestionado"
          />
          
          <MetricCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            value="45+"
            label="Startups Activas"
          />
          
          <MetricCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            value="3,500+"
            label="Empleos Generados"
          />
          
          <MetricCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            value="89%"
            label="Tasa de Éxito"
          />
          
        </div>
      </div>
    </section>
  )
}

// Hero alternativo: Más minimalista
export const HeroMinimalFuturistic = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex flex-col">
      {/* Contenido principal centrado */}
      <div className="flex-1 container mx-auto px-md flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className="mb-lg">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card/30 backdrop-blur-sm border border-blue-600/20 text-blue-400 text-small font-medium uppercase tracking-wider">
              Venture Studio
            </span>
          </div>
          
          <h1 className="text-hero text-primary mb-lg">
            Beyond<br />
            <span className="text-blue-400">Tomorrow</span>
          </h1>
          
          <p className="text-subtitle text-secondary mb-xl max-w-2xl mx-auto">
            Construimos el futuro que el mundo necesita
          </p>
          
          <TeslaButton variant="primary" size="lg" href="/ecosistema">
            Descubre Cómo
          </TeslaButton>
        </div>
      </div>

      {/* Métricas como features inmobiliarias */}
      <div className="container mx-auto px-md pb-xl">
        <div className="flex flex-wrap justify-center gap-4">
          <MetricCard icon={<span className="text-lg">💰</span>} value="$127M" label="Impacto Capital" />
          <MetricCard icon={<span className="text-lg">🚀</span>} value="45+" label="Ventures" />
          <MetricCard icon={<span className="text-lg">👥</span>} value="3,500+" label="Jobs Created" />
          <MetricCard icon={<span className="text-lg">🎯</span>} value="89%" label="Success Rate" />
        </div>
      </div>
    </section>
  )
}

export default HeroFuturisticHaven