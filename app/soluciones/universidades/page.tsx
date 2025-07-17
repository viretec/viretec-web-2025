// =====================================================================
// PÁGINA SOLUCIONES UNIVERSIDADES - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Section, SectionHeader, Card, Button, Heading, Text, MetricsGrid } from '@/app/components/ui/ComponentesBase'
import { GraduationCap, Microscope, FileText, TrendingUp, Users, CheckCircle, ArrowRight, Rocket, Award, Download, Beaker } from 'lucide-react'

// === METADATA ===
export const metadata = {
  title: 'Soluciones para Universidades | VIRETEC',
  description: 'Del laboratorio al mercado. Transferencia tecnológica, comercialización de IP y spin-offs universitarios exitosos.',
}

// === DATOS DE LA PÁGINA ===

// Hero métricas específicas para universidades
const universityMetrics = [
  { value: '85', suffix: '+', label: 'Spin-offs Creados' },
  { value: '$45', suffix: 'M', label: 'IP Comercializada' },
  { value: '92', suffix: '%', label: 'Éxito en TT' },
  { value: '15', suffix: 'meses', label: 'Time to Market' }
]

// Servicios para universidades
const universityServices = [
  {
    icon: Microscope,
    title: 'Technology Transfer',
    description: 'Convertimos investigación universitaria en productos comerciales viables, maximizando el valor de la propiedad intelectual.',
    features: [
      'IP assessment & valuation',
      'Market opportunity analysis',
      'Technology readiness evaluation',
      'Licensing strategy design'
    ],
    gradient: 'from-blue-viretec/20 to-blue-oceano/10',
    stats: '150+ tecnologías transferidas'
  },
  {
    icon: Rocket,
    title: 'Spin-off Creation',
    description: 'Apoyamos la creación de empresas derivadas de investigación universitaria con metodología probada y acompañamiento integral.',
    features: [
      'Business model development',
      'Team formation support',
      'Seed funding access',
      'Market validation process'
    ],
    gradient: 'from-blue-oceano/20 to-blue-brillante/10',
    stats: '85+ spin-offs exitosos'
  },
  {
    icon: Users,
    title: 'Researcher Development',
    description: 'Formamos investigadores en competencias empresariales y les damos las herramientas para comercializar sus innovaciones.',
    features: [
      'Entrepreneurship training',
      'Business skills development',
      'Mentorship programs',
      'Industry connections'
    ],
    gradient: 'from-blue-brillante/20 to-blue-viretec/10',
    stats: '500+ investigadores formados'
  },
  {
    icon: TrendingUp,
    title: 'Industry Partnerships',
    description: 'Conectamos universidades con empresas para colaboraciones de I+D que generen valor compartido y aplicación real.',
    features: [
      'Corporate collaboration design',
      'Joint venture structuring',
      'Research commercialization',
      'Innovation ecosystem building'
    ],
    gradient: 'from-blue-oceano/15 to-blue-brillante/15',
    stats: '200+ partnerships activos'
  }
]

// Áreas de investigación especializadas
const researchAreas = [
  {
    area: 'Biotecnología',
    applications: ['Terapias personalizadas', 'Diagnósticos moleculares', 'Biomanufacturing'],
    marketSize: '$300B+',
    icon: Beaker,
    successRate: '88%'
  },
  {
    area: 'Ciencias de Materiales',
    applications: ['Nanomateriales', 'Materiales inteligentes', 'Composites avanzados'],
    marketSize: '$120B+',
    icon: Award,
    successRate: '85%'
  },
  {
    area: 'Tecnologías Digitales',
    applications: ['IA/ML', 'Blockchain', 'IoT/Sensores'],
    marketSize: '$500B+',
    icon: TrendingUp,
    successRate: '92%'
  },
  {
    area: 'Energía y Sostenibilidad',
    applications: ['Energías renovables', 'Almacenamiento', 'Tecnologías limpias'],
    marketSize: '$250B+',
    icon: Rocket,
    successRate: '90%'
  }
]

// Casos de éxito universitarios
const universitySuccess = [
  {
    university: 'Universidad Nacional de México',
    researcher: 'Dr. Ana Martínez',
    technology: 'Biosensores para diabetes',
    outcome: 'Spin-off valuado en $15M',
    timeline: '18 meses',
    funding: '$2.5M Series A',
    quote: 'VIRETEC nos ayudó a transformar 10 años de investigación en una empresa con impacto real.',
    field: 'Biotecnología'
  },
  {
    university: 'Instituto Tecnológico de Monterrey',
    researcher: 'Dr. Carlos López',
    technology: 'Materiales auto-reparables',
    outcome: 'Licencia a multinacional',
    timeline: '12 meses',
    funding: '$5M deal',
    quote: 'El proceso de transferencia fue más rápido y exitoso de lo que esperábamos.',
    field: 'Materiales'
  },
  {
    university: 'Universidad Autónoma de Guadalajara',
    researcher: 'Dra. María González',
    technology: 'Plataforma AgTech IA',
    outcome: 'Expansión a 8 países',
    timeline: '24 meses',
    funding: '$8M Series B',
    quote: 'Logramos escalar una solución local a un producto global competitivo.',
    field: 'AgTech'
  }
]

// Proceso de transferencia tecnológica
const transferProcess = [
  {
    step: '01',
    title: 'Research Assessment',
    description: 'Evaluación completa del potencial comercial y readiness tecnológico de la investigación.',
    duration: '2-4 semanas',
    deliverables: ['Technology Assessment Report', 'IP Landscape Analysis', 'Market Opportunity Brief']
  },
  {
    step: '02',
    title: 'IP Protection',
    description: 'Estrategia y ejecución de protección de propiedad intelectual adaptada al mercado objetivo.',
    duration: '4-8 semanas',
    deliverables: ['Patent Filing Strategy', 'IP Portfolio Design', 'Freedom to Operate Analysis']
  },
  {
    step: '03',
    title: 'Market Validation',
    description: 'Validación de mercado y desarrollo de modelo de negocio con feedback de clientes potenciales.',
    duration: '8-12 semanas',
    deliverables: ['Market Validation Report', 'Business Model Canvas', 'Customer Discovery Results']
  },
  {
    step: '04',
    title: 'Commercialization',
    description: 'Ejecución de estrategia de comercialización via licensing, spin-off o partnership estratégico.',
    duration: '6-18 meses',
    deliverables: ['Commercialization Strategy', 'Deal Structure', 'Market Entry Plan']
  },
  {
    step: '05',
    title: 'Scale & Growth',
    description: 'Acompañamiento en el scaling y crecimiento con acceso a capital y mercados internacionales.',
    duration: 'Continuo',
    deliverables: ['Growth Strategy', 'International Expansion', 'Strategic Partnerships']
  }
]

// === COMPONENTES ===

// Hero para universidades
const UniversityHero = () => (
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
              <GraduationCap className="w-4 h-4" />
              Para Universidades
            </div>
            
            <Heading level={1} size="hero" className="leading-none">
              <span className="text-blanco-puro">Del Laboratorio</span><br />
              <span className="text-blue-brillante">al Mercado</span>
            </Heading>
            
            <Text size="subtitle" className="max-w-2xl leading-relaxed">
              Transformamos investigación universitaria en soluciones comerciales exitosas. 
              Maximizamos el impacto de tu IP con transferencia tecnológica estratégica.
            </Text>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              variant="primary" 
              size="xl" 
              href="#servicios"
              className="geometric"
              icon={<Microscope className="w-5 h-5" />}
            >
              Evaluar mi Investigación
            </Button>
            <Button 
              variant="secondary" 
              size="xl" 
              href="#casos-exito"
              className="geometric"
            >
              Ver Spin-offs Exitosos
            </Button>
          </div>
        </div>

        {/* Métricas */}
        <div className="fade-in" style={{animationDelay: '0.6s'}}>
          <Card variant="glass" className="relative overflow-hidden geometric" padding="xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
            
            <div className="relative z-10">
              <Heading level={3} size="heading" className="mb-8 text-center">
                Resultados en Transferencia
              </Heading>
              
              <MetricsGrid 
                metrics={universityMetrics}
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

// Servicios universitarios
const UniversityServices = () => (
  <Section background="primary" padding="xl" className="geometric" id="servicios">
    <SectionHeader
      badge="Nuestros Servicios"
      title="Maximiza el Impacto de tu Investigación"
      description="Un ecosistema completo para transformar descubrimientos académicos en soluciones que cambien el mundo y generen valor económico."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {universityServices.map((service, index) => (
        <Card
          key={service.title}
          variant="glass"
          hover
          className={`relative overflow-hidden group geometric fade-in`}
          padding="xl"
          style={{animationDelay: `${index * 0.2}s`}}
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
                {service.stats}
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

// Áreas de investigación
const ResearchAreas = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Áreas de Expertise"
      title="Sectores con Mayor Potencial de Transferencia"
      description="Nos especializamos en las áreas de investigación con mayor demanda de mercado y potencial de comercialización exitosa."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {researchAreas.map((area, index) => (
        <Card
          key={area.area}
          variant="glass"
          hover
          className="relative overflow-hidden group geometric fade-in"
          padding="lg"
          style={{animationDelay: `${index * 0.15}s`}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-viretec/10 border border-blue-viretec/20 geometric">
                  <area.icon className="w-6 h-6 text-blue-brillante" />
                </div>
                <Heading level={4} size="heading" className="group-hover:text-blue-cristal transition-colors duration-300">
                  {area.area}
                </Heading>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-brillante">{area.successRate}</div>
                <div className="text-xs text-gris-suave uppercase">Éxito TT</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm text-gris-platino uppercase tracking-wide font-medium mb-3">
                Aplicaciones Principales
              </div>
              <div className="flex flex-wrap gap-2">
                {area.applications.map((app, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-viretec/10 border border-blue-viretec/20 text-blue-brillante text-sm geometric">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gris-suave uppercase tracking-wide">Tamaño de Mercado</div>
                <div className="text-xl font-bold text-blanco-puro">{area.marketSize}</div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                href={`#${area.area.toLowerCase()}`}
                className="group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
              >
                Ver Oportunidades
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

// Proceso de transferencia
const TransferProcess = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Nuestro Proceso"
      title="5 Etapas hacia la Comercialización Exitosa"
      description="Metodología probada que maximiza el valor de tu investigación y acelera el time-to-market de forma sistemática."
      align="center"
    />

    <div className="max-w-5xl mx-auto">
      <div className="space-y-8">
        {transferProcess.map((step, index) => (
          <Card
            key={step.step}
            variant="glass"
            className="relative overflow-hidden geometric fade-in"
            padding="lg"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              
              {/* Número de paso */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-viretec to-blue-oceano flex items-center justify-center geometric mb-4">
                  <span className="text-2xl font-bold text-blanco-puro">{step.step}</span>
                </div>
                <div className="text-sm text-blue-brillante font-medium uppercase tracking-wide text-center lg:text-left">
                  {step.duration}
                </div>
              </div>
              
              {/* Contenido principal */}
              <div className="lg:col-span-2">
                <Heading level={4} size="heading" className="mb-4">
                  {step.title}
                </Heading>
                <Text className="leading-relaxed mb-6">
                  {step.description}
                </Text>
              </div>

              {/* Deliverables */}
              <div>
                <div className="text-sm text-gris-platino uppercase tracking-wide font-medium mb-3">
                  Entregables
                </div>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gris-suave">
                      <div className="w-1.5 h-1.5 bg-blue-viretec geometric flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Section>
)

// Casos de éxito universitarios
const UniversitySuccessStories = () => (
  <Section background="primary" padding="xl" className="geometric" id="casos-exito">
    <SectionHeader
      badge="Casos de Éxito"
      title="Investigación que Transformó Mercados"
      description="Historias reales de investigadores que convirtieron sus descubrimientos en empresas exitosas y soluciones de impacto global."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {universitySuccess.map((case_, index) => (
        <Card
          key={case_.university}
          variant="glass"
          hover
          className="relative overflow-hidden group geometric fade-in"
          padding="lg"
          style={{animationDelay: `${index * 0.2}s`}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-brillante mb-2">
                {case_.outcome}
              </div>
              <Heading level={4} size="heading" className="mb-1 group-hover:text-blue-cristal transition-colors duration-300">
                {case_.technology}
              </Heading>
              <Text size="small" className="text-blue-brillante uppercase tracking-wide font-medium mb-1">
                {case_.field}
              </Text>
              <Text size="small" className="text-gris-platino">
                {case_.researcher} • {case_.university}
              </Text>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6 text-center">
              <div className="bg-blue-viretec/10 p-3 geometric">
                <div className="text-sm font-bold text-blanco-puro">{case_.timeline}</div>
                <div className="text-xs text-gris-suave uppercase">Timeline</div>
              </div>
              <div className="bg-blue-oceano/10 p-3 geometric">
                <div className="text-sm font-bold text-blanco-puro">{case_.funding}</div>
                <div className="text-xs text-gris-suave uppercase">Funding</div>
              </div>
            </div>

            <Text size="small" className="leading-relaxed italic group-hover:text-blanco-perla transition-colors duration-300">
              "{case_.quote}"
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
            Transforma tu Investigación en Impacto Global
          </Heading>
          <Text size="subtitle" className="max-w-2xl mx-auto">
            Evalúa el potencial comercial de tu investigación y descubre cómo convertir 
            años de trabajo académico en soluciones que cambien el mundo.
          </Text>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            variant="primary" 
            size="xl" 
            href="/contacto"
            className="geometric"
            icon={<Microscope className="w-5 h-5" />}
          >
            Evaluar mi Investigación
          </Button>
          <Button 
            variant="secondary" 
            size="xl" 
            href="/recursos/tech-transfer-guide"
            className="geometric"
            icon={<Download className="w-5 h-5" />}
          >
            Guía de Transferencia
          </Button>
        </div>
      </div>
    </Card>
  </Section>
)

// === PÁGINA PRINCIPAL ===
export default function UniversidadesPage() {
  return (
    <>
      <UniversityHero />
      <UniversityServices />
      <ResearchAreas />
      <TransferProcess />
      <UniversitySuccessStories />
      <FinalCTA />
    </>
  )
}