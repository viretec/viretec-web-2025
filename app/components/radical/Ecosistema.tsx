import Button from './Button'

// Datos del ecosistema
const ecosystemServices = [
  {
    title: 'VENTURE LAB',
    subtitle: 'Para Innovadores',
    description: 'Validación técnica y de mercado. Transformamos ideas y propiedad intelectual en oportunidades reales de negocio.',
    features: ['Due diligence técnico', 'Análisis de mercado', 'Protección IP']
  },
  {
    title: 'VENTURE SHOWCASE', 
    subtitle: 'Para Inversionistas',
    description: 'Portafolio curado de startups validadas y listas para escalar, con métricas claras de impacto y retorno.',
    features: ['Oportunidades pre-seleccionadas', 'Métricas verificadas', 'Deal flow exclusivo']
  },
  {
    title: 'VENTURE CAPITAL',
    subtitle: 'Para Inversionistas',
    description: 'Gestión inteligente de fondos con enfoque en triple impacto, maximizando retornos financieros y sociales.',
    features: ['Gestión profesional', 'Reportes de impacto', 'Co-inversión estratégica']
  },
  {
    title: 'VENTURE BUILDING',
    subtitle: 'Para Empresas',
    description: 'Innovación corporativa ágil. Ayudamos a empresas establecidas a transformarse digitalmente.',
    features: ['Metodologías ágiles', 'Transformación digital', 'Conexión con startups']
  }
]

// Ecosistema con grid brutal
const EcosistemaRadical = () => {
  return (
    <section className="section bg-steel">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-xl">
          <span className="text-body-sm text-accent font-bold tracking-widest uppercase mb-4 block">
            Nuestro Modelo
          </span>
          <h2 className="text-lg text-white mb-6 font-bold">
            ECOSISTEMA INTEGRADO
          </h2>
          <p className="text-body-lg text-silver max-w-3xl mx-auto">
            Conectamos cada pieza del rompecabezas: desde la idea hasta el impacto global.
          </p>
        </div>

        {/* Grid brutal de servicios */}
        <div className="grid-brutal mb-xl" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
          {ecosystemServices.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-4">
                <h3 className="text-md text-accent mb-2 group-hover:text-white transition-fast font-bold">
                  {service.title}
                </h3>
                <p className="text-body-sm text-silver font-semibold">
                  {service.subtitle}
                </p>
              </div>
              
              <p className="text-body text-silver mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-body-sm text-silver">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-md text-white mb-4 font-bold">
              ¿No sabes por dónde empezar?
            </h3>
            <p className="text-body text-silver">
              Te ayudamos a identificar la mejor ruta para tu perfil y objetivos.
            </p>
          </div>
          
          <Button variant="filled" size="lg" href="/contacto">
            Agenda una Consulta
          </Button>
        </div>
      </div>
    </section>
  )
}

// Versión minimalista extrema
export const EcosistemaMinimal = () => {
  return (
    <section className="section bg-void">
      <div className="container">
        <h2 className="text-xl text-white text-center mb-xl font-black">
          ECOSISTEMA
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {ecosystemServices.map((service, index) => (
            <div 
              key={index} 
              className="border-b border-accent/20 py-lg last:border-b-0 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-md text-white mb-2 group-hover:text-accent transition-fast font-bold">
                    {service.title}
                  </h3>
                  <p className="text-body text-silver">
                    {service.description}
                  </p>
                </div>
                
                <div className="text-body-sm text-accent font-bold tracking-wide">
                  {service.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-xl">
          <Button variant="filled" href="/contacto">
            Conversemos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EcosistemaRadical