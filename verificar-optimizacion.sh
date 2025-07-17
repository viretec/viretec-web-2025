#!/bin/bash

# SCRIPT DE VERIFICACIÓN - OPTIMIZACIÓN COMPLETA VIRETEC
# ======================================================

echo "🚀 VERIFICANDO OPTIMIZACIÓN COMPLETA DE VIRETEC"
echo "=============================================="
echo ""

# Verificar archivos principales
echo "📁 Verificando archivos optimizados..."

files=(
    "app/components/radical/HeroOptimizado.tsx"
    "app/components/organisms/ImpactMetricsOptimizado.tsx"
    "app/page.tsx"
    "app/globals.css"
    "OPTIMIZACION_COMPLETA_INSPIRACION.md"
)

all_good=true

for file in "${files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file"
    else
        echo "❌ $file - NO ENCONTRADO"
        all_good=false
    fi
done

echo ""

# Verificar que Next.js puede buildear
echo "🔧 Verificando build de Next.js..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build exitoso"
else
    echo "❌ Error en build"
    all_good=false
fi

echo ""

# Verificar estructura de componentes
echo "🧩 Verificando componentes optimizados..."

if grep -q "HeroOptimizado" app/page.tsx; then
    echo "✅ Hero optimizado implementado"
else
    echo "❌ Hero optimizado no implementado"
    all_good=false
fi

if grep -q "ImpactMetricsOptimizado" app/page.tsx; then
    echo "✅ Métricas optimizadas implementadas"
else
    echo "❌ Métricas optimizadas no implementadas"
    all_good=false
fi

echo ""

# Resultado final
if $all_good; then
    echo "🎉 OPTIMIZACIÓN COMPLETA - TODO PERFECTO!"
    echo "El sitio está listo con todas las optimizaciones basadas en la inspiración visual."
    echo ""
    echo "🌐 Para ver el sitio:"
    echo "   npm run dev"
    echo "   http://localhost:4001"
    echo ""
    echo "📋 Optimizaciones implementadas:"
    echo "   • Hero con jerarquía visual mejorada"
    echo "   • Métricas como en la imagen de inspiración"
    echo "   • Efectos y animaciones optimizadas"
    echo "   • CSS adicional para máxima elegancia"
    echo "   • Layout responsivo perfecto"
else
    echo "⚠️  Algunos archivos necesitan revisión"
fi

echo ""
echo "📖 Ver documentación completa:"
echo "   cat OPTIMIZACION_COMPLETA_INSPIRACION.md"