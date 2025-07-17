'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, Users, Building, GraduationCap, Lightbulb, TrendingUp } from 'lucide-react'

const contactSchema = z.object({
  userType: z.enum(['emprendedor', 'inversionista', 'empresa', 'universidad'], {
    required_error: 'Selecciona tu perfil'
  }),
  firstName: z.string().min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
  lastName: z.string().min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(10, 'Mínimo 10 caracteres').max(1000, 'Máximo 1000 caracteres'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, 'Debes aceptar los términos')
})

type ContactFormData = z.infer<typeof contactSchema>

const userTypes = [
  {
    id: 'emprendedor',
    title: 'Emprendedor/Innovador',
    description: 'Tengo una idea o proyecto innovador',
    icon: Lightbulb,
    color: 'azul-acero'
  },
  {
    id: 'inversionista',
    title: 'Inversionista/Fondo',
    description: 'Busco oportunidades de inversión',
    icon: TrendingUp,
    color: 'plateado-cromado'
  },
  {
    id: 'empresa',
    title: 'Empresa/Industria',
    description: 'Necesito soluciones innovadoras',
    icon: Building,
    color: 'verde-cromo'
  },
  {
    id: 'universidad',
    title: 'Universidad/Centro',
    description: 'Quiero comercializar investigación',
    icon: GraduationCap,
    color: 'aqua-metalico'
  }
]

const budgetRanges = [
  { value: '10k-50k', label: '$10K - $50K USD' },
  { value: '50k-100k', label: '$50K - $100K USD' },
  { value: '100k-500k', label: '$100K - $500K USD' },
  { value: '500k+', label: '$500K+ USD' },
  { value: 'por-definir', label: 'Por definir' }
]

const timelineOptions = [
  { value: 'inmediato', label: 'Inmediato (< 1 mes)' },
  { value: 'corto', label: 'Corto plazo (1-3 meses)' },
  { value: 'medio', label: 'Medio plazo (3-6 meses)' },
  { value: 'largo', label: 'Largo plazo (6+ meses)' }
]

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const selectedUserType = watch('userType')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Form data:', data)
      
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitted(true)
    } catch (error) {
      console.error('Error sending form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-negro-carbon pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-verde-cromo/20 flex items-center justify-center">
            <Mail className="w-10 h-10 text-verde-cromo" />
          </div>
          <h1 className="text-display-md font-bold mb-4">
            ¡<span className="text-gradient-metal">Mensaje enviado</span> con éxito!
          </h1>
          <p className="text-xl text-gris-claro/80 mb-8">
            Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te contactará 
            en las próximas 24 horas.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="metal-button px-8 py-4"
          >
            Volver al Inicio
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-negro-carbon pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-display-lg font-black mb-6">
              Hablemos sobre tu <span className="text-gradient-metal">proyecto</span>
            </h1>
            <p className="text-xl text-gris-claro/80 mb-8">
              Cuéntanos tu idea, desafío u oportunidad. Nuestro equipo está listo 
              para ayudarte a transformarla en realidad.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-plateado-cromado mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-azul-acero/20">
                    <Mail className="w-6 h-6 text-azul-acero" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-plateado-cromado mb-1">Email</h3>
                    <p className="text-gris-claro/70">contacto@viretec.mx</p>
                    <p className="text-gris-claro/70">hello@viretec.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-plateado-cromado/20">
                    <Phone className="w-6 h-6 text-plateado-cromado" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-plateado-cromado mb-1">Teléfono</h3>
                    <p className="text-gris-claro/70">+52 (444) 123-4567</p>
                    <p className="text-gris-claro/70">WhatsApp disponible</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-verde-cromo/20">
                    <MapPin className="w-6 h-6 text-verde-cromo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-plateado-cromado mb-1">Ubicación</h3>
                    <p className="text-gris-claro/70">San Luis Potosí, México</p>
                    <p className="text-gris-claro/70">Servicios globales</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 metal-card">
                <h3 className="text-lg font-semibold text-plateado-cromado mb-3">
                  Tiempo de Respuesta
                </h3>
                <p className="text-gris-claro/70 text-sm">
                  Nos comprometemos a responder tu consulta en menos de 24 horas. 
                  Para proyectos urgentes, contáctanos directamente por WhatsApp.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* User Type Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-plateado-cromado mb-4">
                    1. ¿Cuál es tu perfil? *
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`cursor-pointer metal-card p-4 transition-all duration-300 ${
                          selectedUserType === type.id
                            ? `border-${type.color} bg-${type.color}/10`
                            : 'hover:border-plateado-cromado/50'
                        }`}
                      >
                        <input
                          type="radio"
                          value={type.id}
                          {...register('userType')}
                          className="sr-only"
                        />
                        <div className="flex items-start gap-3">
                          <type.icon className={`w-6 h-6 text-${type.color} mt-1`} />
                          <div>
                            <h4 className="font-semibold text-plateado-cromado mb-1">
                              {type.title}
                            </h4>
                            <p className="text-sm text-gris-claro/70">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.userType && (
                    <p className="text-rojo-cobre text-sm mt-2">{errors.userType.message}</p>
                  )}
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-plateado-cromado mb-4">
                    2. Información Personal
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-plateado-cromado mb-2">
                        Nombre *
                      </label>
                      <input
                        {...register('firstName')}
                        className="metal-input"
                        placeholder="Tu nombre"
                      />
                      {errors.firstName && (
                        <p className="text-rojo-cobre text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plateado-cromado mb-2">
                        Apellidos *
                      </label>
                      <input
                        {...register('lastName')}
                        className="metal-input"
                        placeholder="Tus apellidos"
                      />
                      {errors.lastName && (
                        <p className="text-rojo-cobre text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plateado-cromado mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="metal-input"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-rojo-cobre text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plateado-cromado mb-2">
                        Teléfono
                      </label>
                      <input
                        {...register('phone')}
                        className="metal-input"
                        placeholder="+52 (444) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                {selectedUserType && (
                  <div>
                    <h3 className="text-xl font-semibold text-plateado-cromado mb-4">
                      3. Información Profesional
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-plateado-cromado mb-2">
                          {selectedUserType === 'emprendedor' ? 'Startup/Proyecto' :
                           selectedUserType === 'inversionista' ? 'Fondo/Organización' :
                           selectedUserType === 'empresa' ? 'Empresa' : 'Institución'}
                        </label>
                        <input
                          {...register('company')}
                          className="metal-input"
                          placeholder="Nombre de la organización"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-plateado-cromado mb-2">
                          Cargo/Posición
                        </label>
                        <input
                          {...register('position')}
                          className="metal-input"
                          placeholder="Tu cargo actual"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-plateado-cromado mb-4">
                    4. Detalles del Proyecto
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-plateado-cromado mb-2">
                        Cuéntanos sobre tu proyecto o necesidad *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="metal-input resize-none"
                        placeholder="Describe tu proyecto, idea, desafío o la oportunidad en la que podríamos colaborar..."
                      />
                      {errors.message && (
                        <p className="text-rojo-cobre text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-plateado-cromado mb-2">
                          Presupuesto estimado
                        </label>
                        <select {...register('budget')} className="metal-input">
                          <option value="">Seleccionar rango</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-plateado-cromado mb-2">
                          Timeline deseado
                        </label>
                        <select {...register('timeline')} className="metal-input">
                          <option value="">Seleccionar timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      {...register('acceptTerms')}
                      className="mt-1"
                    />
                    <label className="text-sm text-gris-claro/70">
                      Acepto los{' '}
                      <a href="/terminos" className="text-azul-acero hover:text-aqua-metalico">
                        términos y condiciones
                      </a>{' '}
                      y la{' '}
                      <a href="/privacidad" className="text-azul-acero hover:text-aqua-metalico">
                        política de privacidad
                      </a>
                      . Autorizo el tratamiento de mis datos personales para contacto comercial.
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-rojo-cobre text-sm mb-4">{errors.acceptTerms.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="metal-button w-full md:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="inline-block ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}