import React from 'react'

// Componente de botón Tesla-style optimizado
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

// Componente de métrica individual optimizado (estilo inspiración)
const MetricCard = ({ 
  value, 
  label, 
  suffix = '', 
  description = '',
  delay = 0 
}: {
  value: string
  label: string
  suffix?: string
  description?: string
  delay?: number
}) => (
  <div 
    className="group relative fade-in" 
    style={{animationDelay: `${delay}s`}}
  >
    {/* Card principal */}
    <div className="bg-bg-card/50 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-bg-card/70">
      {/* Valor principal */}
      <div className="mb-3">
        <span className="text-3xl xl:text-4xl font-bold text-blue-400">
          {value}
        </span>
        {suffix && (
          <span className="text-2xl xl:text-3xl font-bold text-white/60 ml-1">
            {suffix}
          </span>
        )}
      </div>
      
      {/* Label principal */}
      <div className="text-white font-medium mb-1 text-sm uppercase tracking-wide">
        {label}
      </div>
      
      {/* Descripción opcional */}
      {description && (
        <div className="text-white/60 text-xs">
          {description}
        </div>
      )}
      
      {/* Línea decorativa */}
      <div className="w-full h-px bg-gradient-to-r from-blue-500/20 to-transparent mt-4 group-hover:from-blue-500/40 transition-all duration-300"></div>
    </div>
    
    {/* Efecto hover sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
)

// Hero optimizado inspirado en la imagen
const HeroOptimizado = () => {
  return (
    <section className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Gradiente de fondo sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Grid pattern muy sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-md relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full">
            
            {/* Área principal del contenido */}
            <div className="grid lg:grid-cols-12 gap-xl items-center">
              
              {/* Contenido principal - 8 columnas */}
              <div className="lg:col-span-8 space-y-xl">
                
                {/* Badge superior */}
                <div className="fade-in">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-small font-medium uppercase tracking-wide">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Venture Studio
                  </span>
                </div>
                
                {/* Título principal */}
                <div className="space-y-lg fade-in" style={{animationDelay: '0.2s'}}>
                  <h1 className="text-hero text-primary leading-none">
                    El futuro es<br />
                    <span className="text-blue-400">sustentable</span>
                  </h1>
                  
                  <p className="text-subtitle text-secondary max-w-2xl leading-relaxed">
                    Aceleramos la transición hacia un futuro sustentable. Transformamos ideas 
                    innovadoras en empresas que resuelven los desafíos más importantes de nuestro tiempo.
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{animationDelay: '0.4s'}}>
                  <TeslaButton variant="primary" size="lg" href="/ecosistema">
                    Explora Nuestro Ecosistema
                  </TeslaButton>
                  <TeslaButton variant="secondary" size="lg" href="/contacto">
                    Agenda una Reunión
                  </TeslaButton>
                </div>
              </div>
              
              {/* Sidebar con métricas destacadas - 4 columnas */}
              <div className="lg:col-span-4">
                <div className="space-y-6">
                  
                  {/* Métrica principal destacada */}
                  <div className="fade-in" style={{animationDelay: '0.6s'}}>
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 p-8 relative">
                      {/* Valor principal */}
                      <div className="text-center mb-6">
                        <div className="text-5xl xl:text-6xl font-bold text-blue-400 mb-2">
                          $127M
                        </div>
                        <div className="text-white font-medium uppercase tracking-wide text-sm">
                          Capital de Impacto
                        </div>
                        <div className="text-white/60 text-xs mt-1">
                          Gestionado activamente
                        </div>
                      </div>
                      
                      {/* Línea decorativa central */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-6"></div>
                      
                      {/* Sub-métricas */}
                      <div className="space-y-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white">45+</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Startups</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">3,500+</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Empleos</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">2030</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Carbon Neutral</div>
                        </div>
                      </div>
                      
                      {/* Efecto de esquina */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="grid grid-cols-2 gap-4 fade-in" style={{animationDelay: '0.8s'}}>
                    <div className="bg-bg-card/30 border border-white/10 p-4 text-center">
                      <div className="text-lg font-bold text-green-400">89%</div>
                      <div className="text-xs text-white/60 uppercase tracking-wide">Tasa Éxito</div>
                    </div>
                    <div className="bg-bg-card/30 border border-white/10 p-4 text-center">
                      <div className="text-lg font-bold text-blue-400">Net+</div>
                      <div className="text-xs text-white/60 uppercase tracking-wide">Impacto</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll optimizado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{animationDelay: '1s'}}>
        <div className="flex flex-col items-center gap-3 text-white/40 hover:text-white/60 transition-colors duration-300">
          <div className="text-xs uppercase tracking-widest font-medium">Explorar</div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroOptimizado