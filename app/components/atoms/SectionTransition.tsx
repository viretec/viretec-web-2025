'use client'

import { motion } from 'framer-motion'

interface SectionTransitionProps {
  variant?: 'wave' | 'gradient' | 'texture'
  className?: string
}

const SectionTransition = ({ variant = 'wave', className = '' }: SectionTransitionProps) => {
  if (variant === 'wave') {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C360,20 720,80 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
            className="text-negro-carbon"
            animate={{
              d: [
                "M0,50 C360,20 720,80 1440,50 L1440,100 L0,100 Z",
                "M0,50 C360,80 720,20 1440,50 L1440,100 L0,100 Z",
                "M0,50 C360,20 720,80 1440,50 L1440,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className={`relative h-24 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
      </div>
    )
  }

  if (variant === 'texture') {
    return (
      <div className={`relative h-24 ${className}`}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/textures/Textura Arena.png')`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            filter: 'contrast(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-negro-carbon" />
      </div>
    )
  }

  return null
}

export default SectionTransition
