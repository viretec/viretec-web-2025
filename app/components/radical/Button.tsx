import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'outline' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button = ({ 
  children, 
  variant = 'outline', 
  size = 'md', 
  onClick, 
  href, 
  disabled = false,
  type = 'button',
  className = ''
}: ButtonProps) => {
  const baseClasses = 'btn'
  const variantClasses = variant === 'filled' ? 'btn--filled' : ''
  const sizeClasses = size === 'sm' ? 'btn--sm' : size === 'lg' ? 'btn--lg' : ''
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim()

  // Si es un link
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  // Si es un botón
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}

// Componentes de conveniencia
export const ButtonOutline = (props: Omit<ButtonProps, 'variant'>) => (
  <Button {...props} variant="outline" />
)

export const ButtonFilled = (props: Omit<ButtonProps, 'variant'>) => (
  <Button {...props} variant="filled" />
)

export const ButtonSmall = (props: Omit<ButtonProps, 'size'>) => (
  <Button {...props} size="sm" />
)

export const ButtonLarge = (props: Omit<ButtonProps, 'size'>) => (
  <Button {...props} size="lg" />
)

export default Button