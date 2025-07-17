// API Route para manejar el formulario de contacto
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  userType: z.enum(['emprendedor', 'inversionista', 'empresa', 'universidad']),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(10).max(1000),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  acceptTerms: z.boolean()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // TODO: Implementar envío real de email
    // Opciones:
    // 1. Usar servicio como SendGrid, Resend, o AWS SES
    // 2. Guardar en base de datos (Supabase, MongoDB, etc.)
    // 3. Integrar con CRM (HubSpot, Salesforce, etc.)

    console.log('Nuevo contacto:', validatedData)

    // Por ahora, simular éxito
    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en formulario de contacto:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
