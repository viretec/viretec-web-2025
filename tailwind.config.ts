import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === TESLA VERDE PALETTE ===
        'bg-primary': '#000000',
        'bg-secondary': '#0a0a0a', 
        'bg-card': '#111111',
        
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',
        'text-muted': '#9ca3af',
        
        'green-primary': '#10b981',
        'green-glow': '#34d399',
        'green-dark': '#059669',
        
        'accent-blue': '#3b82f6',
        'accent-gray': '#6b7280',
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // === TESLA TYPOGRAPHY ===
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.05em', fontWeight: '700' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '600' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // === TESLA SPACING ===
        'xs': '0.5rem',
        'sm': '1rem', 
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
      maxWidth: {
        'container': '1200px',
      },
      animation: {
        // === ANIMACIONES SUTILES ===
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-subtle': '0 0 20px rgba(16, 185, 129, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config