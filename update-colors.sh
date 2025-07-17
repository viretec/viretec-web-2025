#!/bin/bash

# Script para actualizar referencias a dorado-metalico en el proyecto

echo "🔄 Actualizando referencias a dorado-metalico..."

# Lista de archivos para actualizar
files=(
  "app/soluciones/page.tsx"
  "app/soluciones/emprendedores/page.tsx"
  "app/recursos/page.tsx"
  "app/ecosistema/page.tsx"
  "app/impacto/page.tsx"
  "app/contacto/page.tsx"
  "app/nosotros/page.tsx"
  "app/utils/colorClasses.ts"
)

# Función para actualizar un archivo
update_file() {
  local file=$1
  if [ -f "$file" ]; then
    # Reemplazar text-dorado-metalico con text-plateado-cromado
    sed -i '' 's/text-dorado-metalico/text-plateado-cromado/g' "$file"
    
    # Reemplazar bg-dorado-metalico con bg-plateado-cromado
    sed -i '' 's/bg-dorado-metalico/bg-plateado-cromado/g' "$file"
    
    # Reemplazar hover:text-dorado-metalico con hover:text-aqua-metalico
    sed -i '' 's/hover:text-dorado-metalico/hover:text-aqua-metalico/g' "$file"
    
    # Reemplazar border-dorado-metalico con border-plateado-cromado
    sed -i '' 's/border-dorado-metalico/border-plateado-cromado/g' "$file"
    
    # Reemplazar color: 'dorado-metalico' con color: 'plateado-cromado'
    sed -i '' "s/color: 'dorado-metalico'/color: 'plateado-cromado'/g" "$file"
    
    echo "✅ Actualizado: $file"
  else
    echo "❌ No encontrado: $file"
  fi
}

# Actualizar cada archivo
for file in "${files[@]}"; do
  update_file "$file"
done

echo "✨ Actualización completada!"
echo ""
echo "📝 Nota: Por favor revisa los cambios manualmente para asegurarte de que todo se vea bien."
echo "🎨 Los colores dorados han sido reemplazados por:"
echo "   - plateado-cromado para elementos destacados"
echo "   - aqua-metalico para hovers"
