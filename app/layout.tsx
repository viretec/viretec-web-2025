import type { Metadata } from 'next'
import './globals.css'
// === COMPONENTES FINALES OPTIMIZADOS ===
import HeaderFinal from '@/app/components/layout/HeaderFinal'
import FooterFinal from '@/app/components/layout/FooterFinal'
import { montserrat } from '@/app/utils/fonts'

export const metadata: Metadata = {
  title: 'VIRETEC - Venture Studio | El Futuro es Sustentable',
  description: 'Aceleramos la transición hacia un futuro sustentable. Transformamos ideas innovadoras en empresas que resuelven los desafíos más importantes de nuestro tiempo.',
  keywords: 'venture studio, innovación sustentable, tecnología verde, inversión de impacto, emprendimiento, México, triple impacto',
  authors: [{ name: 'VIRETEC' }],
  openGraph: {
    title: 'VIRETEC - Venture Studio | El Futuro es Sustentable',
    description: 'Transformamos ideas innovadoras en empresas sustentables. $127M en capital de impacto, 45+ startups, 3,500+ empleos generados.',
    url: 'https://viretec.com',
    siteName: 'VIRETEC',
    images: [
      {
        url: '/images/og-viretec-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'VIRETEC - Venture Studio sustentable'
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIRETEC - El Futuro es Sustentable',
    description: 'Venture Studio líder en innovación sustentable. Transformamos ideas en empresas de triple impacto.',
    images: ['/images/twitter-viretec-2025.jpg'],
    creator: '@viretec',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} smooth-scroll`}>
      <head>
        {/* Preload fonts críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-primary text-primary antialiased font-sans">
        {/* HEADER FINAL - Sistema refinado azul & blanco */}
        <HeaderFinal />
        
        {/* MAIN CONTENT - Con espaciado para header fijo */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* FOOTER FINAL - Elegancia arquitectónica */}
        <FooterFinal />
        
        {/* Scripts de analytics y performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll suave para navegación interna
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                });
              });
            `
          }}
        />
      </body>
    </html>
  )
}