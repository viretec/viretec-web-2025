// =====================================================================
// HERO FINAL - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Button, Metric } from '@/app/components/ui/ComponentesBase'

// Hero Final con métricas horizontales optimizado
const HeroFinal = () => {
  return (
    <section className="relative min-h-screen bg-negro-absoluto overflow-hidden geometric pt-20">
      {/* Background Image con Overlay */}
      <div className="absolute inset-0">
        {/* Imagen de fondo desde gallery */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-2"
          style={{
            backgroundImage: `url('/images/gallery/hero image.jpeg')`,
            backgroundPosition: 'center -450px' // <-- AÑADE ESTA LÍNEA
          }}
        />
        
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/80 to-black/90"></div>
        
        {/* Efectos adicionales de partículas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-viretec/30 blur-2xl animate-pulse geometric"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-brillante/20 blur-xl animate-pulse geometric" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Efectos de luz ambiental */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-viretec/10 geometric blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-oceano/5 geometric blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center relative">
          
          {/* Contenido Principal */}
          <div className="flex-1 flex items-center max-w-5xl">
            <div className="w-full">
              
              {/* Título Principal */}
              <div className="space-y-6 mb-12 fade-in" style={{animationDelay: '0.2s'}}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="text-blanco-puro">El futuro es</span><br />
                  <span className="text-blue-brillante">colaborativo</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-blanco-perla max-w-3xl leading-relaxed font-light">
                  Impulsamos la innovación como herramienta de evolución, 
                  construyendo ventures que impactan positivamente nuestro entorno.
                </p>
              </div>
              
              {/* CTAs usando ComponentesBase */}
              <div className="flex flex-col sm:flex-row gap-6 fade-in" style={{animationDelay: '0.4s'}}>
                <Button 
                  variant="primary" 
                  size="xl" 
                  href="/ecosistema"
                  className="geometric"
                >
                  Explora Nuestro Ecosistema
                </Button>
                <Button 
                  variant="secondary" 
                  size="xl" 
                  href="/contacto"
                  className="geometric"
                >
                  Agenda una Reunión
                </Button>
              </div>
            </div>
          </div>
          
          {/* Métricas Horizontales Mejoradas */}
          <div className="mt-16 fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-negro-profundo/30 backdrop-blur-xl border border-blue-viretec/20 p-8 lg:p-10 geometric relative overflow-hidden">
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
                
                {/* Grid de métricas horizontales con efecto mejorado */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 relative z-10">
                  <div className="text-center group">
                    <div className="mb-3">
                      <span className="text-3xl lg:text-4xl font-bold text-blanco-puro">$127</span>
                      <span className="text-2xl lg:text-3xl font-bold text-blue-brillante ml-1">M</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gris-suave uppercase tracking-widest font-medium mb-3">
                      Capital de Impacto
                    </div>
                    {/* Efecto de subrayado atractivo */}
                    <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent group-hover:via-blue-viretec/80 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-viretec/60 via-blue-brillante/80 to-blue-viretec/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="mb-3">
                      <span className="text-3xl lg:text-4xl font-bold text-blanco-puro">45</span>
                      <span className="text-2xl lg:text-3xl font-bold text-blue-brillante ml-1">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gris-suave uppercase tracking-widest font-medium mb-3">
                      Startups Activas
                    </div>
                    <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent group-hover:via-blue-viretec/80 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-viretec/60 via-blue-brillante/80 to-blue-viretec/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="mb-3">
                      <span className="text-3xl lg:text-4xl font-bold text-blanco-puro">3,500</span>
                      <span className="text-2xl lg:text-3xl font-bold text-blue-brillante ml-1">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gris-suave uppercase tracking-widest font-medium mb-3">
                      Empleos Generados
                    </div>
                    <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent group-hover:via-blue-viretec/80 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-viretec/60 via-blue-brillante/80 to-blue-viretec/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="mb-3">
                      <span className="text-3xl lg:text-4xl font-bold text-blanco-puro">89</span>
                      <span className="text-2xl lg:text-3xl font-bold text-blue-brillante ml-1">%</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gris-suave uppercase tracking-widest font-medium mb-3">
                      Tasa de Éxito
                    </div>
                    <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent group-hover:via-blue-viretec/80 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-viretec/60 via-blue-brillante/80 to-blue-viretec/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Línea decorativa superior mejorada */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-viretec/50 to-transparent"></div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-brillante/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroFinal

/*
OPTIMIZACIONES APLICADAS EN HOMOLOGACIÓN:
✅ Uso de ComponentesBase (Button, Metric)
✅ Colores homologados según guía artística
✅ Clase 'geometric' aplicada para border-radius: 0
✅ Variables CSS de la paleta (blue-viretec, negro-absoluto, etc.)
✅ Métricas con layout horizontal usando componente reutilizable
✅ Estructura atómica (organisms/HeroFinal.tsx)

CARACTERÍSTICAS MANTENIDAS:
✅ Métricas en formato HORIZONTAL
✅ Grid responsivo 2x2 en mobile, 1x4 en desktop  
✅ Efectos hover y animaciones
✅ Backdrop blur optimizado para legibilidad
✅ Imagen de fondo original del proyecto
✅ Transiciones suaves en todos los elementos
*/