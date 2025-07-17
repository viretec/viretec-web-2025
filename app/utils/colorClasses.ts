// Mapeo de clases de colores para evitar clases dinámicas de Tailwind
export const colorClasses = {
  'azul-acero': {
    bg: 'bg-azul-acero',
    bgLight: 'bg-azul-acero/20',
    text: 'text-azul-acero',
    border: 'border-azul-acero',
  },
  'dorado-metalico': {
    bg: 'bg-plateado-cromado',
    bgLight: 'bg-plateado-cromado/20',
    text: 'text-plateado-cromado',
    border: 'border-plateado-cromado',
  },
  'verde-cromo': {
    bg: 'bg-verde-cromo',
    bgLight: 'bg-verde-cromo/20',
    text: 'text-verde-cromo',
    border: 'border-verde-cromo',
  },
  'aqua-metalico': {
    bg: 'bg-aqua-metalico',
    bgLight: 'bg-aqua-metalico/20',
    text: 'text-aqua-metalico',
    border: 'border-aqua-metalico',
  },
  'plateado-cromado': {
    bg: 'bg-plateado-cromado',
    bgLight: 'bg-plateado-cromado/20',
    text: 'text-plateado-cromado',
    border: 'border-plateado-cromado',
  },
  'azul-titanio': {
    bg: 'bg-azul-titanio',
    bgLight: 'bg-azul-titanio/20',
    text: 'text-azul-titanio',
    border: 'border-azul-titanio',
  },
  'verde-eco': {
    bg: 'bg-verde-eco',
    bgLight: 'bg-verde-eco/20',
    text: 'text-verde-eco',
    border: 'border-verde-eco',
  },
  'rojo-cobre': {
    bg: 'bg-rojo-cobre',
    bgLight: 'bg-rojo-cobre/20',
    text: 'text-rojo-cobre',
    border: 'border-rojo-cobre',
  },
  'ambar-metalico': {
    bg: 'bg-ambar-metalico',
    bgLight: 'bg-ambar-metalico/20',
    text: 'text-ambar-metalico',
    border: 'border-ambar-metalico',
  },
} as const

export type ColorKey = keyof typeof colorClasses

// Función helper para obtener clases de color
export function getColorClasses(color: ColorKey) {
  return colorClasses[color] || colorClasses['azul-acero']
}
