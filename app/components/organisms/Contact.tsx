// =====================================================================
// CONTACT HOMOLOGADO - VIRETEC 2025
// Homologado con estructura atómica + "Geometría Futurista Profesional"
// ✅ ComponentesBase | ✅ Border-radius: 0 | ✅ Paleta unificada
// =====================================================================

'use client'

import React from 'react'
import { Mail, Phone, MapPin, Send, Users, Zap } from 'lucide-react'
import { Section, SectionHeader, Card, Button, Heading, Text } from '@/app/components/ui/ComponentesBase'

// === INFORMACIÓN DE CONTACTO ===
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@viretec.com',
    href: 'mailto:contacto@viretec.com',
    description: 'Respuesta en menos de 24 horas'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+52 55 5555 5555',
    href: 'tel:+525555555555',
    description: 'Lunes a Viernes, 9:00 - 18:00'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Ciudad de México, México',
    description: 'Zona financiera y de innovación'
  }
]

// === MÉTRICAS DE CONTACTO ===
const contactMetrics = [
  { value: '24h', label: 'Tiempo de Respuesta' },
  { value: '98%', label: 'Satisfacción Cliente' },
  { value: '500+', label: 'Consultas Atendidas' }
]

// === COMPONENTE DE INFORMACIÓN DE CONTACTO ===
const ContactInfoItem = ({ item, index }: { item: typeof contactInfo[0], index: number }) => (
  <Card 
    variant="glass" 
    hover 
    className="relative overflow-hidden group geometric"
    padding="lg"
  >
    {/* Gradiente de fondo */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-viretec/10 to-blue-oceano/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    
    {/* Contenido */}
    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-blue-viretec/10 border border-blue-viretec/20 geometric group-hover:bg-blue-viretec/20 group-hover:border-blue-viretec/40 transition-all duration-300">
          <item.icon className="w-6 h-6 text-blue-brillante group-hover:text-blue-viretec transition-colors duration-300" />
        </div>
        <div className="flex-1">
          <Heading level={4} size="heading" className="mb-2 group-hover:text-blue-cristal transition-colors duration-300">
            {item.title}
          </Heading>
          {item.href ? (
            <a 
              href={item.href} 
              className="text-blanco-perla hover:text-blue-brillante transition-colors duration-300 text-lg font-medium block mb-2"
            >
              {item.value}
            </a>
          ) : (
            <Text size="large" className="text-blanco-perla mb-2 font-medium">
              {item.value}
            </Text>
          )}
          <Text size="small" className="text-gris-suave group-hover:text-gris-platino transition-colors duration-300">
            {item.description}
          </Text>
        </div>
      </div>
    </div>

    {/* Decoración esquina */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-viretec/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 geometric" />
  </Card>
)

// === FORMULARIO DE CONTACTO HOMOLOGADO ===
const ContactForm = () => (
  <Card 
    variant="glass" 
    className="relative overflow-hidden geometric"
    padding="xl"
  >
    {/* Efecto de brillo */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-viretec/5 to-transparent"></div>
    
    {/* Contenido del formulario */}
    <div className="relative z-10">
      <div className="mb-8">
        <Heading level={3} size="heading" className="mb-4">
          Envíanos un Mensaje
        </Heading>
        <Text className="max-w-md">
          Cuéntanos sobre tu proyecto y te contactaremos para explorar cómo podemos ayudarte a escalar tu impacto.
        </Text>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-3 text-gris-platino uppercase tracking-wide">
              Nombre Completo
            </label>
            <input 
              id="name" 
              type="text" 
              className="input geometric w-full"
              placeholder="Tu nombre completo" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-3 text-gris-platino uppercase tracking-wide">
              Email Corporativo
            </label>
            <input 
              id="email" 
              type="email" 
              className="input geometric w-full"
              placeholder="tu.email@empresa.com" 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-3 text-gris-platino uppercase tracking-wide">
            Empresa/Organización
          </label>
          <input 
            id="company" 
            type="text" 
            className="input geometric w-full"
            placeholder="Nombre de tu empresa" 
          />
        </div>

        <div>
          <label htmlFor="segment" className="block text-sm font-medium mb-3 text-gris-platino uppercase tracking-wide">
            Tu Perfil
          </label>
          <select id="segment" className="input geometric w-full">
            <option value="">Selecciona tu perfil</option>
            <option value="inversionista">Inversionista/Fondo</option>
            <option value="emprendedor">Emprendedor/Innovador</option>
            <option value="empresa">Empresa/Corporativo</option>
            <option value="universidad">Universidad/Investigación</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-3 text-gris-platino uppercase tracking-wide">
            ¿Cómo podemos ayudarte?
          </label>
          <textarea 
            id="message" 
            rows={4} 
            className="input geometric w-full resize-none"
            placeholder="Describe tu proyecto, necesidades o consulta..."
          />
        </div>
        
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full geometric"
          icon={<Send className="w-4 h-4" />}
          iconPosition="right"
        >
          Enviar Mensaje
        </Button>
      </form>
    </div>

    {/* Líneas decorativas */}
    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-viretec/30 to-transparent"></div>
    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-brillante/20 to-transparent"></div>
  </Card>
)

// === COMPONENTE PRINCIPAL ===
const Contact = () => {
  return (
    <Section background="primary" padding="xl" id="contacto" className="geometric">
      {/* Header de sección */}
      <SectionHeader
        badge="Conversemos"
        title="¿Listo para Transformar el Futuro?"
        description="Ya seas inversionista, emprendedor, empresa o universidad, tenemos la experiencia y el ecosistema para llevar tu visión al siguiente nivel. Iniciemos esta conversación."
        align="center"
      />

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        
        {/* Columna izquierda: Información */}
        <div className="space-y-8">
          
          {/* Información de contacto */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <ContactInfoItem item={item} index={index} />
              </div>
            ))}
          </div>

          {/* Métricas de contacto */}
          <div className="bg-gradient-to-r from-blue-viretec/10 via-blue-oceano/5 to-blue-viretec/10 border border-blue-viretec/20 p-6 geometric fade-in" style={{animationDelay: '0.6s'}}>
            <Heading level={4} size="heading" className="mb-6 text-center">
              Tu Éxito, Nuestro Compromiso
            </Heading>
            <div className="grid grid-cols-3 gap-4">
              {contactMetrics.map((metric, index) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl font-bold text-blanco-puro mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gris-suave uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="fade-in" style={{animationDelay: '0.4s'}}>
          <ContactForm />
        </div>
      </div>

      {/* CTA adicional */}
      <div className="text-center bg-gradient-to-r from-blue-viretec/5 via-blue-oceano/3 to-blue-viretec/5 border border-blue-viretec/10 p-8 lg:p-12 geometric fade-in" style={{animationDelay: '0.8s'}}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-4 bg-blue-viretec/10 border border-blue-viretec/20 geometric">
              <Users className="w-8 h-8 text-blue-brillante" />
            </div>
            <div>
              <Heading level={4} size="heading" className="mb-2">
                ¿Prefieres una Videollamada?
              </Heading>
              <Text>
                Agenda una sesión de 30 minutos para explorar oportunidades específicas
              </Text>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              href="/calendario"
              className="geometric"
              icon={<Zap className="w-4 h-4" />}
            >
              Agendar Reunión
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              href="/recursos"
              className="geometric"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact;
