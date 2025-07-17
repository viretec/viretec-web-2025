'use client'

import React from 'react'
import Link from 'next/link'

interface MetalButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const MetalButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'right'
}: MetalButtonProps) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 
    font-semibold tracking-wide transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-negro-carbon
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${fullWidth ? 'w-full' : ''}
  `

  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm rounded-lg',
    md: 'px-8 py-3.5 text-base rounded-xl',
    lg: 'px-10 py-4 text-lg rounded-xl'
  }

  const variantClasses = {
    primary: `
      bg-negro-carbon text-white
      shadow-metal-md hover:shadow-metal-lg
      focus:ring-plateado-cromado
      before:absolute before:inset-0 before:overflow-hidden before:rounded-xl
      before:bg-gradient-to-r before:from-transparent before:via-plateado-cromado/20 before:to-transparent
      before:translate-x-[-200%] hover:before:translate-x-[200%]
      before:transition-transform before:duration-700
      hover:transform hover:translateY-[-2px]
    `,
    secondary: `
      bg-transparent text-plateado-cromado
      border-2 border-plateado-cromado
      hover:bg-plateado-cromado hover:text-negro-carbon
      focus:ring-plateado-cromado
      hover:transform hover:translateY-[-2px]
      hover:shadow-metal-md
    `,
    outline: `
      bg-transparent text-gris-claro
      border border-gris-titanio/30
      hover:border-plateado-cromado hover:text-white
      focus:ring-gris-titanio
      hover:transform hover:translateY-[-1px]
    `
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}

export default MetalButton
