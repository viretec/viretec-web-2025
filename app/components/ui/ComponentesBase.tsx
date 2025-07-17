import React from 'react'

// =====================================================================
// SISTEMA DE COMPONENTES VIRETEC 2025
// Componentes base para homologar todo el sitio
// =====================================================================

// === BOTONES UNIFICADOS ===
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  className = '',
  icon,
  iconPosition = 'right'
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}) => {
  const baseClasses = 'btn'
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    ghost: 'btn-ghost',
    outline: 'btn-secondary'
  }[variant]
  
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    xl: 'btn-lg text-lg px-12 py-6'
  }[size]
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  )

  if (href) {
    return <a href={href} className={classes}>{content}</a>
  }

  return <button onClick={onClick} className={classes}>{content}</button>
}

// === TÍTULOS UNIFICADOS ===
export const Heading = ({
  children,
  level = 2,
  size,
  color = 'primary',
  className = '',
  balance = false
}: {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'hero' | 'display' | 'heading' | 'subtitle'
  color?: 'primary' | 'secondary' | 'muted' | 'blue'
  className?: string
  balance?: boolean
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const sizeClasses = {
    hero: 'text-hero',
    display: 'text-display', 
    heading: 'text-heading',
    subtitle: 'text-subtitle'
  }[size || (level === 1 ? 'hero' : level === 2 ? 'display' : 'heading')]
  
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted', 
    blue: 'text-blue'
  }[color]
  
  const balanceClass = balance ? 'text-balance' : ''
  
  const classes = `${sizeClasses} ${colorClasses} ${balanceClass} ${className}`.trim()
  
  return <Tag className={classes}>{children}</Tag>
}

// === TEXTO UNIFICADO ===
export const Text = ({
  children,
  size = 'body',
  color = 'secondary', 
  className = '',
  as = 'p'
}: {
  children: React.ReactNode
  size?: 'small' | 'body' | 'subtitle' | 'large'
  color?: 'primary' | 'secondary' | 'muted' | 'blue'
  className?: string
  as?: 'p' | 'span' | 'div'
}) => {
  const Tag = as
  
  const sizeClasses = {
    small: 'text-small',
    body: 'text-body',
    subtitle: 'text-subtitle',
    large: 'text-xl'
  }[size]
  
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary', 
    muted: 'text-muted',
    blue: 'text-blue'
  }[color]
  
  const classes = `${sizeClasses} ${colorClasses} ${className}`.trim()
  
  return <Tag className={classes}>{children}</Tag>
}

// === CARDS UNIFICADAS ===
export const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  padding = 'lg'
}: {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'gradient' | 'minimal'
  hover?: boolean
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}) => {
  const baseClasses = 'card'
  
  const variantClasses = {
    default: '',
    glass: 'glass-effect',
    gradient: 'gradient-border',
    minimal: 'border-0 bg-transparent'
  }[variant]
  
  const hoverClass = hover ? 'hover-lift' : ''
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }[padding]
  
  const classes = `${baseClasses} ${variantClasses} ${hoverClass} ${paddingClasses} ${className}`.trim()
  
  return <div className={classes}>{children}</div>
}

// === MÉTRICAS REUTILIZABLES ===
export const Metric = ({
  value,
  suffix,
  label,
  description,
  icon,
  layout = 'vertical',
  size = 'md'
}: {
  value: string | number
  suffix?: string
  label: string
  description?: string
  icon?: React.ReactNode
  layout?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
}) => {
  const sizeClasses = {
    sm: { value: 'text-xl', suffix: 'text-lg', label: 'text-xs' },
    md: { value: 'text-3xl', suffix: 'text-2xl', label: 'text-sm' },
    lg: { value: 'text-5xl', suffix: 'text-4xl', label: 'text-base' }
  }[size]

  if (layout === 'horizontal') {
    return (
      <div className="flex items-center gap-4 group">
        {icon && (
          <div className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        )}
        <div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className={`font-bold text-white ${sizeClasses.value}`}>
              {value}
            </span>
            {suffix && (
              <span className={`font-bold text-blue-400 ${sizeClasses.suffix}`}>
                {suffix}
              </span>
            )}
          </div>
          <div className={`text-gray-400 uppercase tracking-wide font-medium ${sizeClasses.label}`}>
            {label}
          </div>
          {description && (
            <div className="text-gray-500 text-xs mt-1">
              {description}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="text-center group">
      {icon && (
        <div className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity mb-3 flex justify-center">
          {icon}
        </div>
      )}
      <div className="mb-2">
        <span className={`font-bold text-white ${sizeClasses.value}`}>
          {value}
        </span>
        {suffix && (
          <span className={`font-bold text-blue-400 ml-1 ${sizeClasses.suffix}`}>
            {suffix}
          </span>
        )}
      </div>
      <div className={`text-gray-400 uppercase tracking-wide font-medium mb-2 ${sizeClasses.label}`}>
        {label}
      </div>
      {description && (
        <div className="text-gray-500 text-xs">
          {description}
        </div>
      )}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mt-3 group-hover:via-blue-500/60 transition-all duration-300"></div>
    </div>
  )
}

// === SECCIONES UNIFICADAS ===
export const Section = ({
  children,
  background = 'primary',
  padding = 'lg',
  className = '',
  container = true,
  id
}: {
  children: React.ReactNode
  background?: 'primary' | 'secondary' | 'card' | 'transparent'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  className?: string
  container?: boolean
  id?: string
}) => {
  const bgClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary', 
    card: 'bg-card',
    transparent: 'bg-transparent'
  }[background]
  
  const paddingClasses = {
    none: '',
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  }[padding]
  
  const classes = `${bgClasses} ${paddingClasses} ${className}`.trim()
  
  const content = container ? (
    <div className="container">
      {children}
    </div>
  ) : children
  
  return (
    <section id={id} className={classes}>
      {content}
    </section>
  )
}

// === HEADER DE SECCIÓN ===
export const SectionHeader = ({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  className = ''
}: {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align]
  
  const classes = `mb-16 ${alignClasses} ${className}`.trim()
  
  return (
    <div className={classes}>
      {badge && (
        <div className="mb-6 fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-small font-medium uppercase tracking-wide rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            {badge}
          </span>
        </div>
      )}
      
      <Heading level={2} size="display" className="mb-6 fade-in" style={{animationDelay: '0.2s'}}>
        {title}
      </Heading>
      
      {subtitle && (
        <Heading level={3} size="subtitle" color="blue" className="mb-6 fade-in" style={{animationDelay: '0.3s'}}>
          {subtitle}
        </Heading>
      )}
      
      {description && (
        <Text size="subtitle" className="max-w-3xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
          {description}
        </Text>
      )}
    </div>
  )
}

// === GRID DE MÉTRICAS ===
export const MetricsGrid = ({
  metrics,
  columns = 4,
  layout = 'vertical',
  size = 'md',
  className = ''
}: {
  metrics: Array<{
    value: string | number
    suffix?: string
    label: string
    description?: string
    icon?: React.ReactNode
  }>
  columns?: 1 | 2 | 3 | 4
  layout?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns]
  
  const classes = `grid ${gridClasses} gap-8 ${className}`.trim()
  
  return (
    <div className={classes}>
      {metrics.map((metric, index) => (
        <div key={index} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
          <Metric {...metric} layout={layout} size={size} />
        </div>
      ))}
    </div>
  )
}