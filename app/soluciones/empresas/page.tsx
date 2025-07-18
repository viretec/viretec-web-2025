// =====================================================================
// PÁGINA SOLUCIONES EMPRESAS - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Section, SectionHeader, Card, Button, Heading, Text, MetricsGrid } from '@/app/components/ui/ComponentesBase'
import { Building2, Zap, Target, Cog, TrendingUp, Users, CheckCircle, ArrowRight, Rocket, Award, Download } from 'lucide-react'

// === METADATA ===
export const metadata = {
  title: 'Soluciones para Empresas | VIRETEC',
  description: 'Innovación abierta, transformación digital y conexión con startups para resolver desafíos complejos empresariales.',
}

// === DATOS DE LA PÁGINA ===

// Hero métricas específicas para empresas
const corporateMetrics = [
  { value: '150', suffix: '+', label: 'Empresas Transformadas' },
  { value: '87', suffix: '%', label: 'Proyectos Exitosos' },
  { value: '45', suffix: '%', label: 'Reducción Costos' },
  { value: '12', suffix: 'meses', label: 'ROI Promedio' }
]

// Servicios para empresas
const corporateServices = [
  {
    icon: Target,
    title: 'Innovation Scouting',
    description: 'Identificamos y conectamos tu empresa con las startups y tecnologías que resuelven específicamente tus desafíos estratégicos.',
    features: [
      'Mapeo de ecosystem tecnológico',
      'Due diligence de startups',
      'Proof of concept development',
      'Strategic partnership design'
    ],
    gradient: 'from-blue-viretec/20 to-blue-oceano/10',
    results: '200+ conexiones exitosas'
  },
  {
    icon: Cog,
    title: 'Digital Transformation',
    description: 'Aceleramos tu transformación digital con metodologías ágiles y tecnologías de vanguardia adaptadas a tu industria.',
    features: [
      'Assessment digital maturity',
      'Roadmap de transformación',
      'Implementación gradual',
      'Change management support'
    ],
    gradient: 'from-blue-oceano/20 to-blue-brillante/10',
    results: 'Hasta 45% reducción costos'
  },
  {
    icon: Users,
    title: 'Corporate Venturing',
    description: 'Construimos tu brazo de venture capital interno para invertir estratégicamente en startups alineadas con tu core business.',
    features: [
      'Venture fund setup',
      'Investment thesis development',
      'Portfolio management',
      'Strategic integration'
    ],
    gradient: 'from-blue-brillante/20 to-blue-viretec/10',
    results: '$50M+ capital gestionado'
  },
  {
    icon: Rocket,
    title: 'Innovation Labs',
    description: 'Desarrollamos centros de innovación internos que fomentan la cultura emprendedora y aceleran el desarrollo de nuevos productos.',
    features: [
      'Lab design & setup',
      'Metodologías de innovación',
      'Talent development',
      'Ecosystem connections'
    ],
    gradient: 'from-blue-oceano/15 to-blue-brillante/15',
    results: '25+ labs implementados'
  }
]

// Sectores de especialización
const specializedSectors = [
  {
    sector: 'Financial Services',
    challenges: ['Fintech integration', 'Regulatory compliance', 'Digital banking'],
    solutions: ['API integrations', 'Blockchain solutions', 'AI risk management'],
    icon: TrendingUp
  },
  {
    sector: 'Manufacturing',
    challenges: ['Industry 4.0', 'Supply chain optimization', 'Predictive maintenance'],
    solutions: ['IoT implementations', 'Digital twins', 'AI-powered analytics'],
    icon: Cog
  },
  {
    sector: 'Healthcare',
    challenges: ['Digital health', 'Telemedicine', 'Medical devices'],
    solutions: ['HealthTech platforms', 'AI diagnostics', 'Wearable technologies'],
    icon: Award
  },
  {
    sector: 'Energy & Utilities',
    challenges: ['Renewable integration', 'Grid modernization', 'Energy efficiency'],
    solutions: ['Smart grid tech', 'Energy storage', 'Sustainability platforms'],
    icon: Zap
  }
]

// Casos de éxito corporativos
const corporateSuccess = [
  {
    company: 'Banco Nacional',
    sector: 'Financial Services',
    challenge: 'Modernización de sistemas legacy',
    solution: 'Implementación gradual de microservicios y APIs',
    results: {
      efficiency: '+40%',
      cost: '-35%',
      time: '8 meses'
    },
    quote: 'La transformación nos posicionó como líder digital en el sector financiero mexicano.'
  },
  {
    company: 'Manufacturera Global',
    sector: 'Manufacturing',
    challenge: 'Optimización de cadena de suministro',
    solution: 'Plataforma IoT predictiva con IA',
    results: {
      efficiency: '+55%',
      cost: '-28%',
      time: '12 meses'
    },
    quote: 'Redujimos desperdicios y aumentamos la eficiencia operacional significativamente.'
  },
  {
    company: 'Grupo Energético',
    sector: 'Energy',
    challenge: 'Integración de energías renovables',
    solution: 'Smart grid y sistemas de almacenamiento',
    results: {
      efficiency: '+65%',
      cost: '-45%',
      time: '18 meses'
    },
    quote: 'Logramos una transición energética exitosa y rentable.'
  }
]

// === COMPONENTES ===

// Hero para empresas
const CorporateHero = () => (
  <Section background="primary" padding="xl" className="geometric relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-viretec/10 geometric blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-oceano/5 geometric blur-2xl"></div>
    </div>
    
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contenido principal */}
        <div className="space-y-8">
          <div className="space-y-6 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-viretec/10 border border-blue-viretec/20 text-blue-brillante text-sm font-medium uppercase tracking-wide geometric">
              <Building2 className="w-4 h-4" />
              Para Empresas
            </div>
            
            <Heading level={1} size="hero" className="leading-none">
              <span className="text-blanco-puro">Innovación</span><br />
              <span className="text-blue-brillante">Corporativa</span>
            </Heading>
            
            <Text size="subtitle" className="max-w-2xl leading-relaxed">
              Transformamos tu empresa conectándote con las mejores startups y tecnologías. 
              Resolvemos tus desafíos más complejos con innovación abierta y metodologías probadas.
            </Text>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 fade-in" >
            <Button 
              variant="primary" 
              size="xl" 
              href="#servicios"
              className="geometric"
              icon={<Rocket className="w-5 h-5" />}
            >
              Explorar Soluciones
            </Button>
            <Button 
              variant="secondary" 
              size="xl" 
              href="#casos-exito"
              className="geometric"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>

        {/* Métricas */}
        <div className="fade-in" >
          <Card variant="glass" className="relative overflow-hidden geometric" padding="xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
            
            <div className="relative z-10">
              <Heading level={3} size="heading" className="mb-8 text-center">
                Impacto Comprobado
              </Heading>
              
              <MetricsGrid 
                metrics={corporateMetrics}
                columns={2}
                size="md"
                className="gap-6"
              />
            </div>
            
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-viretec/30 to-transparent"></div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-brillante/20 to-transparent"></div>
          </Card>
        </div>
      </div>
    </div>
  </Section>
)

// Servicios corporativos
const CorporateServices = () => (
  <Section background="primary" padding="xl" className="geometric" id="servicios">
    <SectionHeader
      badge="Nuestros Servicios"
      title="Soluciones Integrales para tu Transformación"
      description="Un ecosistema completo de servicios diseñados para acelerar tu innovación y maximizar el impacto de la transformación digital."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {corporateServices.map((service, index) => (
        <Card
          key={service.title}
          variant="glass"
          hover
          className={`relative overflow-hidden group geometric fade-in`}
          padding="xl"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
          
          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-blue-viretec/10 border border-blue-viretec/20 geometric group-hover:bg-blue-viretec/20 group-hover:border-blue-viretec/40 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <Heading level={3} size="heading" className="mb-3 group-hover:text-blue-cristal transition-colors duration-300">
                  {service.title}
                </Heading>
                <Text className="leading-relaxed group-hover:text-blanco-perla transition-colors duration-300">
                  {service.description}
                </Text>
              </div>
            </div>

            <div className="mb-6">
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gris-suave group-hover:text-gris-platino transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-blue-viretec flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-blue-brillante font-medium">
                {service.results}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                href={`#${service.title.toLowerCase().replace(' ', '-')}`}
                className="group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Conocer Más
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

// Sectores especializados
const SpecializedSectors = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Sectores de Especialización"
      title="Expertise Profundo por Industria"
      description="Conocemos los desafíos únicos de cada sector y tenemos las soluciones tecnológicas específicas para resolverlos."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {specializedSectors.map((sector, index) => (
        <Card
          key={sector.sector}
          variant="glass"
          hover
          className="relative overflow-hidden group geometric fade-in"
          padding="lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-viretec/10 border border-blue-viretec/20 geometric">
                <sector.icon className="w-6 h-6 text-blue-brillante" />
              </div>
              <Heading level={4} size="heading" className="group-hover:text-blue-cristal transition-colors duration-300">
                {sector.sector}
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gris-platino uppercase tracking-wide font-medium mb-3">
                  Desafíos Comunes
                </div>
                <ul className="space-y-2">
                  {sector.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gris-suave">
                      <div className="w-1.5 h-1.5 bg-blue-oceano geometric flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm text-gris-platino uppercase tracking-wide font-medium mb-3">
                  Nuestras Soluciones
                </div>
                <ul className="space-y-2">
                  {sector.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gris-suave">
                      <div className="w-1.5 h-1.5 bg-blue-viretec geometric flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

// Casos de éxito corporativos
const CorporateSuccessStories = () => (
  <Section background="primary" padding="xl" className="geometric" id="casos-exito">
    <SectionHeader
      badge="Casos de Éxito"
      title="Transformaciones que Generan Resultados"
      description="Empresas que han logrado transformaciones exitosas y medibles con nuestro acompañamiento estratégico."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {corporateSuccess.map((case_, index) => (
        <Card
          key={case_.company}
          variant="glass"
          hover
          className="relative overflow-hidden group geometric fade-in"
          padding="lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <Heading level={4} size="heading" className="mb-2 group-hover:text-blue-cristal transition-colors duration-300">
                {case_.company}
              </Heading>
              <Text size="small" className="text-blue-brillante uppercase tracking-wide font-medium mb-3">
                {case_.sector}
              </Text>
              
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-xs text-gris-suave uppercase tracking-wide">Desafío:</span>
                  <Text size="small" className="text-gris-platino">{case_.challenge}</Text>
                </div>
                <div>
                  <span className="text-xs text-gris-suave uppercase tracking-wide">Solución:</span>
                  <Text size="small" className="text-gris-platino">{case_.solution}</Text>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-blue-viretec/10 p-3 geometric">
                <div className="text-lg font-bold text-blue-brillante">{case_.results.efficiency}</div>
                <div className="text-xs text-gris-suave uppercase">Eficiencia</div>
              </div>
              <div className="bg-blue-oceano/10 p-3 geometric">
                <div className="text-lg font-bold text-blue-brillante">{case_.results.cost}</div>
                <div className="text-xs text-gris-suave uppercase">Costos</div>
              </div>
              <div className="bg-blue-brillante/10 p-3 geometric">
                <div className="text-lg font-bold text-blue-brillante">{case_.results.time}</div>
                <div className="text-xs text-gris-suave uppercase">Timeline</div>
              </div>
            </div>

            <Text size="small" className="leading-relaxed italic group-hover:text-blanco-perla transition-colors duration-300">
              &ldquo;{case_.quote}&rdquo;
            </Text>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card>
      ))}
    </div>
  </Section>
)

// CTA Final
const FinalCTA = () => (
  <Section background="primary" padding="xl" className="geometric">
    <Card 
      variant="glass" 
      className="relative overflow-hidden geometric text-center"
      padding="xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-viretec/10 via-blue-oceano/5 to-blue-viretec/10"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-8">
          <Heading level={2} size="display" className="mb-6">
            Acelera la Transformación de tu Empresa
          </Heading>
          <Text size="subtitle" className="max-w-2xl mx-auto">
            Conversemos sobre los desafíos específicos de tu empresa y diseñemos 
            una estrategia de innovación que genere resultados medibles.
          </Text>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            variant="primary" 
            size="xl" 
            href="/contacto"
            className="geometric"
            icon={<Zap className="w-5 h-5" />}
          >
            Agendar Consultoría
          </Button>
          <Button 
            variant="secondary" 
            size="xl" 
            href="/recursos/corporate-innovation"
            className="geometric"
            icon={<Download className="w-5 h-5" />}
          >
            Descargar Whitepaper
          </Button>
        </div>
      </div>
    </Card>
  </Section>
)

// === PÁGINA PRINCIPAL ===
export default function EmpresasPage() {
  return (
    <>
      <CorporateHero />
      <CorporateServices />
      <SpecializedSectors />
      <CorporateSuccessStories />
      <FinalCTA />
    </>
  )
}