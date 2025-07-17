
import React from 'react';

const HeroBackground = () => {
  return (
    <svg 
      className="hero-svg-background" 
      viewBox="0 0 1920 1080" 
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0, // Initial state for fade-in animation
        animation: 'fadeInSVG 2s ease-out forwards',
      }}
    >
      <defs>
        {/* Gradientes adaptados a la paleta de Viretec */}
        <radialGradient id="originGlowViretec" cx="50%" cy="50%" r="80%">
          <stop offset="0%" style={{ stopColor: 'var(--azul-acero)', stopOpacity: 0.5 }} />
          <stop offset="70%" style={{ stopColor: 'var(--azul-acero)', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: 'var(--azul-acero)', stopOpacity: 0 }} />
        </radialGradient>

        <linearGradient id="lineGradientViretec1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'var(--aqua-metalico)', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: 'var(--plateado-cromado)', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: 'var(--gris-acento)', stopOpacity: 0.4 }} />
        </linearGradient>

        <linearGradient id="lineGradientViretec2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'var(--azul-titanio)', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: 'var(--aqua-metalico)', stopOpacity: 0.5 }} />
        </linearGradient>

        {/* Filtros y Patrones */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="80" height="69.28" patternTransform="scale(1.5)">
          <polygon points="40,0 70,17.32 70,51.96 40,69.28 10,51.96 10,17.32"
                   fill="none" stroke="var(--gris-acento)" strokeWidth="0.3" opacity="0.1"/>
        </pattern>

        <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(1.5)">
          <circle cx="20" cy="20" r="0.5" fill="var(--plateado-cromado)" opacity="0.1"/>
        </pattern>
      </defs>

      {/* Capas de Parallax */}
      <g className="parallax-layer-1 background-grid" style={{ willChange: 'transform' }}>
        <rect width="100%" height="100%" fill="url(#hexPattern)"/>
        <rect width="100%" height="100%" fill="url(#dotPattern)"/>
      </g>

      <g className="parallax-layer-2" style={{ willChange: 'transform' }}>
        <path className="connection-line delay-4" d="M150,200 Q400,400 700,350 T1200,180 Q1500,120 1800,300" stroke="url(#lineGradientViretec2)" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path className="connection-line delay-3" d="M100,800 Q300,600 600,700 T1100,650 Q1400,600 1700,750" stroke="url(#lineGradientViretec2)" strokeWidth="1.2" fill="none" opacity="0.3"/>
        <path className="connection-line delay-2" d="M1800,150 Q1600,300 1400,200 T900,350 Q600,400 300,250" stroke="url(#lineGradientViretec1)" strokeWidth="1" fill="none" opacity="0.35"/>
      </g>

      <g className="parallax-layer-3" style={{ willChange: 'transform' }}>
        <path id="mainPath1" className="connection-line" d="M960,540 Q1200,300 1500,400 T1800,350" stroke="url(#lineGradientViretec1)" strokeWidth="3" fill="none" filter="url(#glow)"/>
        <path id="mainPath2" className="connection-line delay-1" d="M950,530 Q700,200 400,300 T120,250" stroke="url(#lineGradientViretec1)" strokeWidth="2.5" fill="none" filter="url(#glow)"/>
        <path id="mainPath3" className="connection-line delay-2" d="M970,550 Q1100,800 1400,700 T1750,850" stroke="url(#lineGradientViretec2)" strokeWidth="2.2" fill="none"/>
        <path id="mainPath4" className="connection-line delay-1" d="M940,560 Q650,750 350,650 T80,800" stroke="url(#lineGradientViretec2)" strokeWidth="2" fill="none"/>
      </g>

      {/* Nodo Central */}
      <g className="origin-node-group parallax-layer-3" style={{ transform: 'translate(960px, 540px)', willChange: 'transform' }}>
        <circle cx="0" cy="0" r="120" fill="url(#originGlowViretec)" opacity="0.3"/>
        <circle cx="0" cy="0" r="60" fill="none" stroke="var(--azul-acero)" strokeWidth="1.5" opacity="0.25" />
        <circle cx="0" cy="0" r="45" fill="var(--negro-carbon)" />
        <circle cx="0" cy="0" r="20" fill="var(--aqua-metalico)" opacity="0.9" />
      </g>

      {/* Nodos de Innovación */}
      <g className="innovation-nodes">
        <circle className="innovation-node delay-1 pulse-node" cx="1500" cy="400" r="12" fill="var(--aqua-metalico)"/>
        <circle className="innovation-node delay-2" cx="400" cy="300" r="10" fill="var(--plateado-cromado)"/>
        <circle className="innovation-node delay-3 pulse-node" cx="1400" cy="700" r="11" fill="var(--azul-acero)"/>
        <circle className="innovation-node delay-4" cx="350" cy="650" r="9" fill="var(--aqua-metalico)"/>
        <circle className="innovation-node delay-5" cx="1750" cy="850" r="10" fill="var(--plateado-cromado)"/>
        <circle className="innovation-node delay-1" cx="120" cy="250" r="8" fill="var(--azul-acero)"/>
        <circle className="innovation-node delay-3" cx="1800" cy="350" r="11" fill="var(--aqua-metalico)"/>
        <circle className="innovation-node delay-5 pulse-node" cx="80" cy="800" r="9" fill="var(--plateado-cromado)"/>
      </g>

      {/* Partículas de Energía */}
      <g className="energy-particles">
        <circle className="energy-particle" r="4" fill="var(--plateado-cromado)" opacity="0.8">
          <animateMotion dur="6s" repeatCount="indefinite" begin="0s"> <mpath href="#mainPath1"/> </animateMotion>
        </circle>
        <circle className="energy-particle" r="3" fill="var(--aqua-metalico)" opacity="0.7">
          <animateMotion dur="8s" repeatCount="indefinite" begin="0.5s"> <mpath href="#mainPath2"/> </animateMotion>
        </circle>
        <circle className="energy-particle" r="3.5" fill="var(--azul-acero)" opacity="0.6">
          <animateMotion dur="7s" repeatCount="indefinite" begin="1s"> <mpath href="#mainPath3"/> </animateMotion>
        </circle>
        <circle className="energy-particle" r="3" fill="var(--plateado-cromado)" opacity="0.75">
          <animateMotion dur="7.5s" repeatCount="indefinite" begin="1.5s"> <mpath href="#mainPath4"/> </animateMotion>
        </circle>
      </g>
    </svg>
  );
};

export default HeroBackground;
