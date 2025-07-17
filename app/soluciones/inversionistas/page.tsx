// =====================================================================
// PÁGINA SOLUCIONES INVERSIONISTAS - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

import React from 'react'
import { Section, SectionHeader, Card, Button, Heading, Text, MetricsGrid } from '@/app/components/ui/ComponentesBase'
import { TrendingUp, DollarSign, Target, Shield, BarChart3, Users, Zap, CheckCircle, ArrowRight, Download } from 'lucide-react'

// === METADATA ===
export const metadata = {
  title: 'Soluciones para Inversionistas | VIRETEC',
  description: 'Deal flow curado, due diligence profesional y gestión de inversiones de triple impacto. Maximiza tu retorno con oportunidades validadas.',
}

// === DATOS DE LA PÁGINA ===

// Hero métricas específicas para inversionistas
const investorMetrics = [
  { value: '$127', suffix: 'M', label: 'Capital Gestionado' },
  { value: '89', suffix: '%', label: 'Tasa de Éxito' },
  { value: '45', suffix: '+', label: 'Startups Activas' },
  { value: '3.2X', suffix: '', label: 'ROI Promedio' }
]

// Servicios para inversionistas
const investorServices = [
  {
    icon: Target,
    title: 'Deal Flow Curado',
    description: 'Acceso exclusivo a oportunidades pre-validadas con potencial de triple impacto. Cada startup pasa por nuestro riguroso proceso de due diligence.',
    features: [
      'Oportunidades pre-seleccionadas por sector',
      'Due diligence técnico y financiero completo',
      'Métricas de impacto social y ambiental',
      'Acceso a deal room exclusivo'
    ],
    cta: 'Ver Deal Flow',
    gradient: 'from-blue-viretec/20 to-blue-oceano/10'
  },
  {
    icon: BarChart3,
    title: 'Gestión Profesional',
    description: 'Gestión activa de tu portafolio con metodologías probadas, reporting transparente y acompañamiento post-inversión para maximizar el valor.',
    features: [
      'Reportes mensuales detallados',
      'Gestión activa del portafolio',
      'Support post-inversión continuo',
      'Dashboard en tiempo real'
    ],
    cta: 'Conocer Gestión',
    gradient: 'from-blue-oceano/20 to-blue-brillante/10'
  },
  {
    icon: Shield,
    title: 'Mitigación de Riesgo',
    description: 'Estrategias avanzadas de diversificación y gestión de riesgo diseñadas específicamente para el ecosistema de innovación tecnológica.',
    features: [
      'Análisis de riesgo por sectores',
      'Diversificación estratégica',
      'Seguros y garantías',
      'Exit strategies definidas'
    ],
    cta: 'Evaluar Riesgos',
    gradient: 'from-blue-brillante/20 to-blue-viretec/10'
  },
  {
    icon: Users,
    title: 'Red de Co-inversión',
    description: 'Conecta con un ecosistema de inversionistas institucionales, family offices y fondos para maximizar oportunidades y compartir conocimiento.',
    features: [
      'Eventos exclusivos de networking',
      'Oportunidades de co-inversión',
      'Acceso a family offices',
      'Club de inversionistas premium'
    ],
    cta: 'Unirse a la Red',
    gradient: 'from-blue-oceano/15 to-blue-brillante/15'
  }
]

// Casos de éxito
const successCases = [
  {
    company: 'BioTech Solutions',
    sector: 'Biotecnología',
    investment: '$2.5M',
    currentValue: '$12M',
    roi: '4.8X',
    timeline: '18 meses',
    description: 'Desarrollo de terapias personalizadas para enfermedades raras'
  },
  {
    company: 'CleanEnergy Pro',
    sector: 'Energía Renovable',
    investment: '$5M',
    currentValue: '$18M',
    roi: '3.6X',
    timeline: '24 meses',
    description: 'Sistemas de almacenamiento de energía solar distribuida'
  },
  {
    company: 'AgriTech Future',
    sector: 'AgTech',
    investment: '$3M',
    currentValue: '$11M',
    roi: '3.7X',
    timeline: '20 meses',
    description: 'Agricultura de precisión con IA y sensores IoT'
  }
]

// Proceso de inversión
const investmentProcess = [
  {
    step: '01',
    title: 'Análisis Inicial',
    description: 'Evaluación de perfil de riesgo, objetivos de inversión y áreas de interés.',
    duration: '1 semana'
  },
  {
    step: '02',
    title: 'Deal Flow Personalizado',
    description: 'Presentación de oportunidades alineadas con tu estrategia de inversión.',
    duration: '2-4 semanas'
  },
  {
    step: '03',
    title: 'Due Diligence',
    description: 'Análisis profundo de tecnología, mercado, equipo y métricas financieras.',
    duration: '4-6 semanas'
  },
  {
    step: '04',
    title: 'Estructuración',
    description: 'Negociación de términos, documentación legal y cierre de la inversión.',
    duration: '2-3 semanas'
  },
  {
    step: '05',
    title: 'Gestión Activa',
    description: 'Acompañamiento continuo, reporting mensual y support estratégico.',
    duration: 'Continuo'
  }
]

// === COMPONENTES ===

// Hero para inversionistas
const InvestorHero = () => (
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
              <DollarSign className="w-4 h-4" />
              Para Inversionistas
            </div>
            
            <Heading level={1} size="hero" className="leading-none">
              <span className="text-blanco-puro">Deal Flow</span><br />
              <span className="text-blue-brillante">Curado</span>
            </Heading>
            
            <Text size="subtitle" className="max-w-2xl leading-relaxed">
              Accede a oportunidades de inversión pre-validadas con potencial de triple impacto. 
              Nuestro proceso de due diligence profesional maximiza tu retorno mientras generas 
              impacto real en la sociedad.
            </Text>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              variant="primary" 
              size="xl" 
              href="#deal-flow"
              className="geometric"
              icon={<TrendingUp className="w-5 h-5" />}
            >
              Ver Oportunidades
            </Button>
            <Button 
              variant="secondary" 
              size="xl" 
              href="#contacto"
              className="geometric"
            >
              Agenda Reunión
            </Button>
          </div>
        </div>

        {/* Métricas */}
        <div className="fade-in" style={{animationDelay: '0.6s'}}>
          <Card variant="glass" className="relative overflow-hidden geometric" padding="xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
            
            <div className="relative z-10">
              <Heading level={3} size="heading" className="mb-8 text-center">
                Resultados Comprobados
              </Heading>
              
              <MetricsGrid 
                metrics={investorMetrics}
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

// Servicios para inversionistas
const InvestorServices = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Nuestros Servicios"
      title="Todo lo que Necesitas para Invertir con Confianza"
      description="Un ecosistema completo diseñado para maximizar tu retorno de inversión mientras generates impacto positivo en el mundo."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {investorServices.map((service, index) => (
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

            <div className="mb-8">
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
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
              href={`#${service.title.toLowerCase().replace(' ', '-')}`}
              className="w-full group-hover:border-blue-brillante group-hover:text-blue-brillante geometric"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              {service.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

// Casos de éxito
const SuccessCases = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Track Record"
      title="Casos de Éxito Comprobado"
      description="Nuestro historial habla por sí mismo. Estas son algunas de las inversiones que han generado retornos excepcionales."
      align="center"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {successCases.map((case_, index) => (
        <Card
          key={case_.company}
          variant="glass"
          hover
          className="relative overflow-hidden group geometric fade-in"
          padding="lg"
          style={{animationDelay: `${index * 0.2}s`}}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <Heading level={4} size="heading" className="mb-2 group-hover:text-blue-cristal transition-colors duration-300">
                {case_.company}
              </Heading>
              <Text size="small" className="text-blue-brillante uppercase tracking-wide font-medium">
                {case_.sector}
              </Text>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm text-gris-suave uppercase tracking-wide mb-1">Inversión</div>
                <div className="text-lg font-bold text-blanco-puro">{case_.investment}</div>
              </div>
              <div>
                <div className="text-sm text-gris-suave uppercase tracking-wide mb-1">Valor Actual</div>
                <div className="text-lg font-bold text-blue-brillante">{case_.currentValue}</div>
              </div>
              <div>
                <div className="text-sm text-gris-suave uppercase tracking-wide mb-1">ROI</div>
                <div className="text-lg font-bold text-blue-viretec">{case_.roi}</div>
              </div>
              <div>
                <div className="text-sm text-gris-suave uppercase tracking-wide mb-1">Timeline</div>
                <div className="text-lg font-bold text-blanco-puro">{case_.timeline}</div>
              </div>
            </div>

            <Text size="small" className="leading-relaxed group-hover:text-blanco-perla transition-colors duration-300">
              {case_.description}
            </Text>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-viretec/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card>
      ))}
    </div>
  </Section>
)

// Proceso de inversión
const InvestmentProcess = () => (
  <Section background="primary" padding="xl" className="geometric">
    <SectionHeader
      badge="Nuestro Proceso"
      title="5 Pasos hacia tu Próxima Gran Inversión"
      description="Un proceso estructurado y transparente que maximiza las probabilidades de éxito desde el primer contacto hasta el exit."
      align="center"
    />

    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {investmentProcess.map((step, index) => (
          <Card
            key={step.step}
            variant="glass"
            className="relative overflow-hidden geometric fade-in"
            padding="lg"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-viretec to-blue-oceano flex items-center justify-center geometric">
                  <span className="text-xl font-bold text-blanco-puro">{step.step}</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <Heading level={4} size="heading">
                    {step.title}
                  </Heading>
                  <div className="text-sm text-blue-brillante font-medium uppercase tracking-wide">
                    {step.duration}
                  </div>
                </div>
                <Text className="leading-relaxed">
                  {step.description}
                </Text>
              </div>
            </div>
          </Card>
        ))}
      </div>
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
            Comienza tu Journey de Inversión Hoy
          </Heading>
          <Text size="subtitle" className="max-w-2xl mx-auto">
            Únete a inversionistas visionarios que están construyendo el futuro mientras generan retornos excepcionales.
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
            Agenda una Reunión
          </Button>
          <Button 
            variant="secondary" 
            size="xl" 
            href="/resources/investor-deck"
            className="geometric"
            icon={<Download className="w-5 h-5" />}
          >
            Descargar Deck
          </Button>
        </div>
      </div>
    </Card>
  </Section>
)

// === PÁGINA PRINCIPAL ===
export default function InvestorsPage() {
  return (
    <>
      <InvestorHero />
      <InvestorServices />
      <SuccessCases />
      <InvestmentProcess />
      <FinalCTA />
    </>
  )
}