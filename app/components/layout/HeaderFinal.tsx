'use client';

import React, { useState, useEffect } from 'react';
// En un proyecto de Next.js, usarías el componente Link para una navegación optimizada.
// import Link from 'next/link';

// Como no tenemos acceso al componente Link de Next.js en este entorno,
// usaremos etiquetas <a> estándar. Simplemente reemplaza <a> por <Link> en tu proyecto.

const HeaderViretec = () => {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Estado para detectar si el usuario ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 10px, se activa el estado
      setIsScrolled(window.scrollY > 10);
    };

    // Se añade el listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Se limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Definición de las rutas de navegación
  const navigation = [
    { name: 'Ecosistema', href: '/ecosistema' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Recursos', href: '/recursos' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre de Viretec */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Página de inicio de Viretec" className="flex items-center gap-3 group">
                {/* Etiqueta de imagen para el logo. */}
                {/* La ruta debe ser relativa a la carpeta 'public' de tu proyecto Next.js. */}
                <img 
                    src="/images/logos/Viretec-horizontal (1).svg" 
                    alt="Viretec Logo" 
                    className="h-8 w-auto"
                    // Este fallback se mostrará si la imagen no se encuentra en la ruta especificada.
                    onError={(e) => { 
                        e.currentTarget.src = 'https://placehold.co/40x40/FFFFFF/000000?text=V'; 
                        e.currentTarget.onerror = null; 
                    }}
                />
                {/* Texto "VIRETEC" al lado del logo */}
                <span className="text-2xl font-bold text-blue-viretec tracking-tight">
                    VIRETEC
                </span>
            </a>
          </div>

          {/* Navegación para Escritorio */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Botón de Llamada a la Acción (CTA) y Menú Móvil */}
          <div className="flex items-center space-x-4">
             {/* CTA para escritorio con estilo ajustado */}
            <a 
              href="/contacto"
              className="hidden md:inline-block bg-blue-viretec text-white font-semibold px-5 py-2 hover:bg-transparent hover:text-blue-viretec border-2 border-blue-viretec transition-all duration-300"
            >
              Conversar
            </a>

            {/* Botón de Menú para Móvil */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-gray-200 hover:text-white focus:outline-none"
                aria-label="Abrir menú principal"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú de Navegación para Móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-200 py-2 px-3 hover:bg-white/10 rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* CTA para móvil con estilo ajustado */}
              <a 
                href="/contacto"
                className="block bg-blue-viretec text-white text-center mt-2 px-5 py-2 font-semibold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Conversar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// --- Tailwind CSS Config (para referencia, no es parte del componente) ---
// En tu archivo tailwind.config.js, podrías tener algo como esto:
/*
module.exports = {
  theme: {
    extend: {
      colors: {
        'blue-viretec': '#00AEEF', // Ejemplo de color personalizado
      },
    },
  },
  plugins: [],
}
*/

export default HeaderViretec;