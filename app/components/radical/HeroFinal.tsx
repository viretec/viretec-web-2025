import React from 'react'

// Componente de botón Tesla-style refinado
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

// Componente de métrica horizontal para el hero
const MetricaHorizontal = ({ 
  value, 
  suffix, 
  label 
}: {
  value: string
  suffix?: string
  label: string
}) => (
  <div className="flex flex-col items-center text-center group">
    <div className="mb-2">
      <span className="text-2xl lg:text-3xl font-bold text-white">
        {value}
      </span>
      {suffix && (
        <span className="text-xl lg:text-2xl font-bold text-blue-400 ml-1">
          {suffix}
        </span>
      )}
    </div>
    <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-medium">
      {label}
    </div>
    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mt-2 group-hover:via-blue-500/60 transition-all duration-300"></div>
  </div>
)

// Hero Final con métricas horizontales y imagen de fondo
const HeroFinal = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image con Overlay */}
      <div className="absolute inset-0">
        {/* Imagen de fondo desde gallery */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/images/gallery/hero image.jpeg')`
          }}
        />
        
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/80 to-black/90"></div>
        
        {/* Efectos adicionales de partículas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/30 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-400/20 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Efectos de luz ambiental */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-between">
          
          {/* Contenido Principal Centrado */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-4xl">
              
              
              {/* Título Principal */}
              <div className="space-y-6 mb-12 fade-in" style={{animationDelay: '0.2s'}}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="text-white">El futuro es</span><br />
                  <span className="text-blue-400">sustentable</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
                  Aceleramos la transición hacia un futuro sustentable. Transformamos ideas 
                  innovadoras en empresas que resuelven los desafíos más importantes de nuestro tiempo.
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 fade-in" style={{animationDelay: '0.4s'}}>
                <TeslaButton variant="primary" size="lg" href="/ecosistema" className="text-base px-8 py-4">
                  Explora Nuestro Ecosistema
                </TeslaButton>
                <TeslaButton variant="secondary" size="lg" href="/contacto" className="text-base px-8 py-4">
                  Agenda una Reunión
                </TeslaButton>
              </div>
            </div>
          </div>
          {/* Métricas Horizontales - Parte Inferior Derecha */}
          <div className="mb-12 fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex justify-end">
              <div className="bg-black/20 backdrop-blur-md border border-white/10 p-6 lg:p-8">
                {/* Grid de métricas horizontales */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
                  <MetricaHorizontal
                    value="$127"
                    suffix="M"
                    label="Capital de Impacto"
                  />
                  <MetricaHorizontal
                    value="45"
                    suffix="+"
                    label="Startups Activas"
                  />
                  <MetricaHorizontal
                    value="3,500"
                    suffix="+"
                    label="Empleos Generados"
                  />
                  <MetricaHorizontal
                    value="89"
                    suffix="%"
                    label="Tasa de Éxito"
                  />
                </div>
                
                {/* Línea decorativa superior */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6"></div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{animationDelay: '0.8s'}}>
        <div className="flex flex-col items-center gap-3 text-white/30 hover:text-white/50 transition-colors duration-300 cursor-pointer">
          <div className="text-xs uppercase tracking-widest font-medium">Explorar</div>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

// Imagen de fondo implementada - desde gallery del proyecto
/*
IMAGEN IMPLEMENTADA: /images/gallery/hero image.jpeg
- Imagen original del proyecto VIRETEC existente
- Integrada con overlay para optimizar legibilidad
- Efectos de partículas azules complementarios
- Estética que mantiene la identidad actual

OPTIMIZACIONES APLICADAS:
- Métricas en formato HORIZONTAL (corregido)
- Grid responsivo 2x2 en mobile, 1x4 en desktop
- Efectos hover individuales por métrica
- Backdrop blur optimizado para legibilidad
- Estilo GEOMÉTRICO - sin esquinas redondeadas
- Transiciones suaves en todos los elementos
*/

export default HeroFinal