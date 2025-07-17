import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export const InvestorIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
    <path d="M32 12 L42 22 L42 32 L52 42 L42 42 L32 52 L22 42 L12 42 L22 32 L22 22 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.1"/>
    <path d="M28 28 L36 28 L36 36 L28 36 Z" 
          fill="currentColor" 
          fillOpacity="0.3"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
  </svg>
)

export const InnovatorIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 8 C32 8 40 16 40 26 C40 31 36 36 32 40 C28 36 24 31 24 26 C24 16 32 8 32 8Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.1"/>
    <circle cx="32" cy="26" r="6" fill="currentColor" fillOpacity="0.3"/>
    <path d="M26 40 L38 40 L36 48 L28 48 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.2"/>
    <path d="M24 48 L40 48 L38 54 L26 54 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.1"/>
    <circle cx="32" cy="26" r="2" fill="currentColor"/>
  </svg>
)

export const EnterpriseIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="16" y="12" width="32" height="40" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.1"
          rx="2"/>
    <rect x="22" y="18" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="36" y="18" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="22" y="28" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="36" y="28" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="22" y="38" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="36" y="38" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="26" y="46" width="12" height="6" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.2"/>
  </svg>
)

export const LabIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26 12 L26 32 L18 48 C18 48 18 52 22 52 L42 52 C46 52 46 48 46 48 L38 32 L38 12"
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"/>
    <path d="M22 12 L42 12" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"/>
    <path d="M26 32 L38 32 L44 44 L20 44 Z" 
          fill="currentColor" 
          fillOpacity="0.2"/>
    <circle cx="28" cy="40" r="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="36" cy="38" r="3" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="32" cy="42" r="1.5" fill="currentColor" fillOpacity="0.6"/>
  </svg>
)

export const NetworkIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <circle cx="12" cy="20" r="4" fill="currentColor" fillOpacity="0.7"/>
    <circle cx="52" cy="20" r="4" fill="currentColor" fillOpacity="0.7"/>
    <circle cx="12" cy="44" r="4" fill="currentColor" fillOpacity="0.7"/>
    <circle cx="52" cy="44" r="4" fill="currentColor" fillOpacity="0.7"/>
    <path d="M28 28 L16 24 M36 28 L48 24 M28 36 L16 40 M36 36 L48 40" 
          stroke="currentColor" 
          strokeWidth="2" 
          opacity="0.5"/>
  </svg>
)

export const MetricsIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="12" y="40" width="8" height="12" fill="currentColor" fillOpacity="0.6"/>
    <rect x="24" y="32" width="8" height="20" fill="currentColor" fillOpacity="0.7"/>
    <rect x="36" y="24" width="8" height="28" fill="currentColor" fillOpacity="0.8"/>
    <rect x="48" y="16" width="8" height="36" fill="currentColor" fillOpacity="0.9"/>
    <path d="M12 36 L20 28 L32 32 L52 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinejoin="round"/>
    <circle cx="52" cy="12" r="3" fill="currentColor"/>
  </svg>
)

export const TeamIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="20" r="6" fill="currentColor" fillOpacity="0.8"/>
    <path d="M24 32 C24 32 24 28 32 28 C40 28 40 32 40 32 L40 40 C40 40 40 44 36 44 L28 44 C24 44 24 40 24 40 Z" 
          fill="currentColor" 
          fillOpacity="0.6"/>
    <circle cx="18" cy="24" r="4" fill="currentColor" fillOpacity="0.6"/>
    <path d="M12 34 C12 34 12 31 18 31 C24 31 24 34 24 34 L24 40 C24 40 24 42 22 42 L14 42 C12 42 12 40 12 40 Z" 
          fill="currentColor" 
          fillOpacity="0.4"/>
    <circle cx="46" cy="24" r="4" fill="currentColor" fillOpacity="0.6"/>
    <path d="M40 34 C40 34 40 31 46 31 C52 31 52 34 52 34 L52 40 C52 40 52 42 50 42 L42 42 C40 42 40 40 40 40 Z" 
          fill="currentColor" 
          fillOpacity="0.4"/>
  </svg>
)

export const RocketIcon = ({ className = '', size = 32 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 8 C32 8 44 12 44 28 C44 44 32 56 32 56 C32 56 20 44 20 28 C20 12 32 8 32 8Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.1"/>
    <circle cx="32" cy="24" r="4" fill="currentColor" fillOpacity="0.5"/>
    <path d="M24 44 L20 52 L28 48 M40 44 L44 52 L36 48" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          fillOpacity="0.2"/>
    <path d="M28 36 L36 36" stroke="currentColor" strokeWidth="2"/>
    <path d="M26 40 L38 40" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
  </svg>
)

export default {
  InvestorIcon,
  InnovatorIcon,
  EnterpriseIcon,
  LabIcon,
  NetworkIcon,
  MetricsIcon,
  TeamIcon,
  RocketIcon
}
