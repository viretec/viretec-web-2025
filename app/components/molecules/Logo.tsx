'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'header' | 'footer' | 'hero' | 'card'
  showText?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'header', 
  showText = true, 
  className = '' 
}) => {
  // Configuraciones de tamaño
  const sizeConfig = {
    sm: { width: 30, height: 30, text: 'text-lg' },
    md: { width: 45, height: 45, text: 'text-2xl' },
    lg: { width: 60, height: 60, text: 'text-3xl' },
    xl: { width: 80, height: 80, text: 'text-4xl' }
  }

  // Configuraciones de variante simplificadas
  const variantConfig = {
    header: {
      container: 'cursor-pointer transition-all duration-300 hover:opacity-90',
      vStyles: 'transition-transform duration-300 hover:scale-110',
      textStyles: 'text-gradient-silver-light font-bold tracking-wide transition-all duration-300'
    },
    footer: {
      container: 'cursor-pointer transition-opacity hover:opacity-80',
      vStyles: 'transition-transform duration-200 hover:scale-105',
      textStyles: 'text-gradient-silver-static font-semibold tracking-wide'
    },
    hero: {
      container: 'cursor-pointer transition-opacity hover:opacity-90',
      vStyles: 'transition-transform duration-200 hover:scale-105',
      textStyles: 'text-gradient-silver-light font-black tracking-wider'
    },
    card: {
      container: 'cursor-pointer transition-opacity hover:opacity-80',
      vStyles: 'transition-transform duration-200 hover:scale-105',
      textStyles: 'text-gradient-silver-static font-bold tracking-wide'
    }
  }

  const config = variantConfig[variant]
  const sizes = sizeConfig[size]

  return (
    <Link href="/" className={`${config.container} ${className}`}>
      <div className="flex items-center gap-4 group">
        {/* V sin efectos metalizados */}
        <div className="relative">
          <Image
            src="/images/logos/V metalizada.png"
            alt="Viretec V"
            width={sizes.width}
            height={sizes.height}
            className={`${config.vStyles} relative z-10`}
            priority
          />
          {/* Efecto de resplandor en hover */}
          <div className="absolute inset-0 bg-gradient-radial from-plateado-cromado/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        </div>
        
        {/* Texto VIRETEC con efecto plateado iluminado */}
        {showText && (
          <span className={`${sizes.text} ${config.textStyles} relative`}>
            VIRETEC
            {/* Efecto de brillo adicional en hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </span>
        )}
      </div>
    </Link>
  )
}

export default Logo