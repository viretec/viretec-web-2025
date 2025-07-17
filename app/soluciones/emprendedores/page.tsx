// =====================================================================
// PÁGINA SOLUCIONES EMPRENDEDORES - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Section, SectionHeader, Card, Button, Heading, Text, MetricsGrid } from '@/app/components/ui/ComponentesBase'
import { Lightbulb, Target, TrendingUp, Users, CheckCircle, ArrowRight, Rocket, Zap, Award, Download } from 'lucide-react'

// === METADATA ===
export const metadata = {
  title: 'Soluciones para Emprendedores | VIRETEC',
  description: 'De la idea a la empresa exitosa. Validación, capital, mentoría y ecosistema completo para emprendedores tecnológicos.',
}

// === DATOS DE LA PÁGINA ===

// Hero métricas específicas para emprendedores
const entrepreneurMetrics = [
  { value: '89', suffix: '%', label: 'Tasa de Éxito' },
  { value: '$127', suffix: 'M', label: 'Capital Movilizado' },
  { value: '45', suffix: '+', label: 'Startups Activas' },
  { value: '18', suffix: 'meses', label: 'Tiempo Promedio MVP' }
]

// Beneficios para emprendedores
const benefits = [
  {
    icon: Target,
    title: 'Validación Profesional',
    description: 'Validamos tu idea con metodología probada y análisis de mercado profundo antes de invertir recursos.',
    features: [
      'Market research especializado',
      'Validación técnica con expertos',
      'Análisis de competitive landscape',
      'Testing de asunciones clave'
    ],
    gradient: 'from-blue-viretec/20 to-blue-oceano/10'
  },
  {
    icon: TrendingUp,
    title: 'Acceso a Capital',
    description: 'Te conectamos con inversionistas alineados con tu sector y etapa, optimizando las probabilidades de funding.',
    features: [
      'Network de 200+ inversionistas',
      'Preparación de pitch deck',
      'Due diligence support',
      'Negociación de términos'
    ],
    gradient: 'from-blue-oceano/20 to-blue-brillante/10'
  },
  {
    icon: Users,
    title: 'Mentoría Experta',
    description: 'Acompañamiento de líderes de industria con experiencia comprobada en scaling de empresas tecnológicas.',
    features: [
      'Mentores C-level activos',
      'Sesiones 1:1 semanales',
      'Board advisory opcional',
      'Network de exalumnos'
    ],
    gradient: 'from-blue-brillante/20 to-blue-viretec/10'
  },
  {
    icon: CheckCircle,
    title: 'Soporte Integral',
    description: 'Desde el concepto hasta el escalamiento, te apoyamos en cada etapa con recursos y expertise especializado.',
    features: [
      'Legal & compliance',
      'Talent acquisition',
      'Operations scaling',
      'International expansion'
    ],
    gradient: 'from-blue-oceano/15 to-blue-brillante/15'
  }
]

// Proceso para emprendedores
const entrepreneurProcess = [
  {
    step: '01',
    title: 'Evaluación Inicial',
    description: 'Análisis profundo de tu idea, equipo y potencial de mercado con metodología probada.',
    duration: '1-2 semanas',
    deliverables: ['Business Model Canvas', 'Market Assessment', 'Team Evaluation']
  },
  {
    step: '02',
    title: 'Validación Tecnológica',
    description: 'Pruebas de concepto y validación técnica de la solución con expertos del sector.',
    duration: '4-8 semanas',
    deliverables: ['Technical Feasibility Study', 'Prototype v1', 'IP Strategy']
  },
  {
    step: '03',
    title: 'Desarrollo de MVP',
    description: 'Construcción y refinamiento del producto mínimo viable con feedback de usuarios.',
    duration: '8-16 semanas',
    deliverables: ['MVP Funcional', 'User Testing Results', 'Product-Market Fit Analysis']
  },
  {
    step: '04',
    title: 'Búsqueda de Inversión',
    description: 'Preparación y presentación ante inversionistas estratégicos del ecosistema.',
    duration: '4-12 semanas',
    deliverables: ['Pitch Deck', 'Financial Projections', 'Investor Meetings']
  },
  {
    step: '05',
    title: 'Escalamiento',
    description: 'Crecimiento acelerado con recursos y expertise del ecosistema completo.',
    duration: 'Continuo',
    deliverables: ['Scale Strategy', 'Team Expansion', 'Market Penetration']
  }
]

// Casos de éxito de emprendedores
const successStories = [
  {
    name: 'María González',
    company: 'BioTech Solutions',
    sector: 'Biotecnología',
    result: '$2.5M ARR',
    timeline: '24 meses',
    quote: 'Viretec no solo validó nuestra tecnología, nos dieron el ecosistema completo para escalar.',
    metrics: { funding: '$1.2M', team: '15 personas', countries: '3 países' }
  },
  {
    name: 'Carlos Ramírez',
    company: 'CleanEnergy Tech',
    sector: 'Energía Renovable',
    result: 'Series A $5M',
    timeline: '18 meses',
    quote: 'El acompañamiento técnico y comercial fue clave para nuestro crecimiento exponencial.',
    metrics: { funding: '$5M', team: '25 personas', countries: '2 países' }
  },
  {
    name: 'Ana Herrera',
    company: 'AgroTech Innovation',
    sector: 'AgTech',
    result: 'Expansión 5 países',
    timeline: '20 meses',
    quote: 'Nos ayudaron a convertir investigación universitaria en una empresa global.',
    metrics: { funding: '$3M', team: '18 personas', countries: '5 países' }
  }
]

// === COMPONENTES ===

// Hero para emprendedores
const EntrepreneurHero = () => (
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
              <Lightbulb className="w-4 h-4" />
              Para Emprendedores
            </div>
            
            <Heading level={1} size="hero" className="leading-none">
              <span className="text-blanco-puro">De la Idea a la</span><br />
              <span className="text-blue-brillante">Empresa de Éxito</span>
            </Heading>
            
            <Text size="subtitle" className="max-w-2xl leading-relaxed">
              Te damos la metodología, el capital y el ecosistema necesarios para transformar 
              tu innovación en una empresa que escale globalmente y genere impacto real.
            </Text>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              variant="primary" 
              size="xl" 
              href="#validacion"
              className="geometric"
              icon={<Rocket className="w-5 h-5" />}
            >
              Validar mi Idea
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
        <div className="fade-in" style={{animationDelay: '0.6s'}}>
          <Card variant="glass" className="relative overflow-hidden geometric" padding="xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
            
            <div className="relative z-10">
              <Heading level={3} size="heading" className="mb-8 text-center">
                Resultados que Hablan
              </Heading>
              
              <MetricsGrid 
                metrics={entrepreneurMetrics}
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

// Beneficios para emprendedores
const EntrepreneurBenefits = () => (
  <Section background="primary" padding="xl" className="geometric" id="validacion">
    <SectionHeader
      badge="¿Por qué VIRETEC?"
      title="Más que Incubación, Somos tu Socio Estratégico"
      description="Un ecosistema completo diseñado para maximizar las probabilidades de éxito de tu startup desde la ideación hasta el scaling global."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {benefits.map((benefit, index) => (
        <Card
          key={benefit.title}
          variant="glass"
          hover
          className={`relative overflow-hidden group geometric fade-in`}
          padding="xl"
          style={{animationDelay: `${index * 0.2}s`}}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
          
          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-blue-viretec/10 border border-blue-viretec/20 geometric group-hover:bg-blue-viretec/20 group-hover:border-blue-viretec/40 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <Heading level={3} size="heading" className="mb-3 group-hover:text-blue-cristal transition-colors duration-300">
                  {benefit.title}
                </Heading>
                <Text className="leading-relaxed group-hover:text-blanco-perla transition-colors duration-300">
                  {benefit.description}
                </Text>
              </div>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gris-suave group-hover:text-gris-platino transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-blue-viretec flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              href={`#${benefit.title.toLowerCase().replace(' ', '-')}`}
              className="w-full group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Conocer Más
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

// Proceso para emprendedores
const EntrepreneurProcess = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Nuestro Proceso"
      title="5 Etapas hacia el Éxito Empresarial"
      description="Metodología probada que maximiza las probabilidades de éxito desde la validación inicial hasta el scaling internacional."
      align="center"
    />

    <div className="max-w-5xl mx-auto">
      <div className="space-y-8">
        {entrepreneurProcess.map((step, index) => (
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

// Casos de éxito
const SuccessStories = () => (
  <Section background="primary" padding="xl" className="geometric" id="casos-exito">
    <SectionHeader
      badge="Track Record"
      title="Historias de Éxito Comprobado"
      description="Emprendedores que transformaron sus ideas en empresas exitosas con nuestro acompañamiento integral."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {successStories.map((story, index) => (
        <Card
          key={story.company}
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
                {story.result}
              </div>
              <Heading level={4} size="heading" className="mb-1 group-hover:text-blue-cristal transition-colors duration-300">
                {story.company}
              </Heading>
              <Text size="small" className="text-blue-brillante uppercase tracking-wide font-medium">
                {story.sector} • {story.timeline}
              </Text>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div>
                <div className="text-sm font-bold text-blanco-puro">{story.metrics.funding}</div>
                <div className="text-xs text-gris-suave uppercase">Funding</div>
              </div>
              <div>
                <div className="text-sm font-bold text-blanco-puro">{story.metrics.team}</div>
                <div className="text-xs text-gris-suave uppercase">Team</div>
              </div>
              <div>
                <div className="text-sm font-bold text-blanco-puro">{story.metrics.countries}</div>
                <div className="text-xs text-gris-suave uppercase">Mercados</div>
              </div>
            </div>

            <Text size="small" className="leading-relaxed italic group-hover:text-blanco-perla transition-colors duration-300">
              "{story.quote}"
            </Text>
            
            <div className="mt-4 text-right">
              <Text size="small" className="font-medium text-blue-brillante">
                — {story.name}
              </Text>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card>
      ))}
    </div>

    <div className="text-center fade-in" style={{animationDelay: '0.6s'}}>
      <Button 
        variant="secondary" 
        size="lg" 
        href="/impacto"
        className="geometric"
        icon={<ArrowRight className="w-4 h-4" />}
        iconPosition="right"
      >
        Ver Todos los Casos
      </Button>
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
            ¿Listo para Transformar tu Idea en Realidad?
          </Heading>
          <Text size="subtitle" className="max-w-2xl mx-auto">
            Agenda una sesión gratuita de evaluación y descubre el potencial real de tu innovación 
            con metodología probada y resultados comprobados.
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
            Evaluación Gratuita
          </Button>
          <Button 
            variant="secondary" 
            size="xl" 
            href="/recursos/entrepreneur-guide"
            className="geometric"
            icon={<Download className="w-5 h-5" />}
          >
            Guía del Emprendedor
          </Button>
        </div>
      </div>
    </Card>
  </Section>
)

// === PÁGINA PRINCIPAL ===
export default function EmprendedoresPage() {
  return (
    <>
      <EntrepreneurHero />
      <EntrepreneurBenefits />
      <EntrepreneurProcess />
      <SuccessStories />
      <FinalCTA />
    </>
  )
}