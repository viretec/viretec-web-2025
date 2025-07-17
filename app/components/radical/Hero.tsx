import Button from './Button'

// Hero minimalista con tipografía extrema
const HeroRadical = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-carbon">
      <div className="container text-center">
        {/* Título extremo */}
        <h1 className="text-mega text-white mb-8 font-black">
          VIRETEC
        </h1>
        
        {/* Subtítulo funcional */}
        <p className="text-body-xl text-silver max-w-3xl mx-auto mb-12 leading-relaxed">
          Venture Studio que transforma ideas en empresas de triple impacto.<br />
          Conectamos tecnología, capital y talento para resolver los desafíos más importantes.
        </p>
        
        {/* CTAs minimalistas */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="filled" size="lg" href="/ecosistema">
            Ver Ecosistema
          </Button>
          <Button size="lg" href="/contacto">
            Agendar Reunión
          </Button>
        </div>
      </div>
    </section>
  )
}

// Hero alternativo: Brutalista con métricas
export const HeroBrutalista = () => {
  const metrics = [
    { value: '$127M', label: 'GESTIONADOS' },
    { value: '45+', label: 'STARTUPS' },
    { value: '3500+', label: 'EMPLEOS' },
    { value: '89%', label: 'ÉXITO' }
  ]

  return (
    <section className="min-h-screen bg-carbon">
      <div className="h-screen grid lg:grid-cols-2">
        {/* Lado izquierdo: Título */}
        <div className="flex items-center justify-center p-8">
          <div className="text-center lg:text-left">
            <h1 className="text-xl text-white leading-none font-black">
              VENTURE<br/>
              STUDIO<br/>
              TRIPLE<br/>
              IMPACTO
            </h1>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="filled" href="/ecosistema">
                Ecosistema
              </Button>
              <Button href="/contacto">
                Contacto
              </Button>
            </div>
          </div>
        </div>
        
        {/* Lado derecho: Métricas */}
        <div className="flex items-center justify-center p-8 bg-steel">
          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg text-accent font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-body-sm text-silver font-semibold tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero con grid brutal
export const HeroGridBrutal = () => {
  return (
    <section className="min-h-screen">
      <div className="grid-brutal h-screen" style={{gridTemplateColumns: '2fr 1fr'}}>
        {/* Contenido principal */}
        <div className="flex items-center justify-center">
          <div className="max-w-2xl">
            <span className="text-body-sm text-accent font-bold tracking-widest uppercase mb-4 block">
              Venture Studio
            </span>
            
            <h1 className="text-xl text-white mb-6 font-black">
              Innovamos para mejorar el mundo
            </h1>
            
            <p className="text-body-lg text-silver mb-8 leading-relaxed">
              Transformamos ideas innovadoras en empresas de triple impacto que 
              resuelven los desafíos más importantes de nuestro tiempo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="filled">
                Explorar Ecosistema
              </Button>
              <Button>
                Ver Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Sidebar con información */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-md text-white mb-2 font-bold">127M+</h3>
              <p className="text-body-sm text-silver">USD gestionados</p>
            </div>
            
            <div>
              <h3 className="text-md text-white mb-2 font-bold">45+</h3>
              <p className="text-body-sm text-silver">Startups en portafolio</p>
            </div>
            
            <div>
              <h3 className="text-md text-white mb-2 font-bold">3500+</h3>
              <p className="text-body-sm text-silver">Empleos generados</p>
            </div>
            
            <div>
              <h3 className="text-md text-white mb-2 font-bold">89%</h3>
              <p className="text-body-sm text-silver">Tasa de éxito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroRadical