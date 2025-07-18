# Development Workflow - Viretec Web 2025

## 🚀 Flujo de Desarrollo Profesional

### 1. Para cualquier cambio nuevo:

```bash
# Crear nueva branch desde main
git checkout main
git pull origin main
git checkout -b feature/descripcion-del-cambio

# Ejemplo:
git checkout -b feature/update-hero-section
git checkout -b fix/contact-form-validation
git checkout -b improvement/performance-optimization
```

### 2. Hacer cambios:

```bash
# Editar archivos necesarios
# Probar localmente
npm run dev

# Verificar que compila
npm run build

# Revisar linting
npm run lint
```

### 3. Commit y push:

```bash
git add .
git commit -m "Descripción clara del cambio

- Detalle específico 1
- Detalle específico 2
- Detalle específico 3"

git push origin feature/descripcion-del-cambio
```

### 4. Crear Pull Request:

1. Ve a GitHub: https://github.com/viretec/viretec-web-2025
2. Verás un banner "Compare & pull request"
3. Click en "Create pull request"
4. Completa la descripción:
   - **Qué cambia**: Descripción clara
   - **Por qué**: Razón del cambio
   - **Cómo probar**: Pasos para verificar

### 5. Review y merge:

1. El CI/CD ejecutará automáticamente:
   - ✅ Linting
   - ✅ Build test
   - ✅ Type checking

2. Si todo pasa:
   - ✅ Merge del PR
   - ✅ Auto-deploy en Vercel
   - ✅ Branch se elimina automáticamente

## 📋 Comandos Útiles

```bash
# Desarrollo local
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Verificar código

# Git workflow
git status           # Ver estado
git log --oneline    # Ver commits
git branch -a        # Ver todas las branches
git checkout main    # Cambiar a main
git pull origin main # Actualizar main
```

## 🔒 Reglas de Protección

- **Main branch**: Protegida
- **Pull Request**: Obligatorio
- **Status checks**: Deben pasar
- **Auto-deploy**: Solo desde main

## 🚨 Emergencias

En caso de hotfix urgente:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/descripcion-urgente
# Hacer cambios mínimos
git commit -m "Hotfix: descripción"
git push origin hotfix/descripcion-urgente
# Crear PR con etiqueta "urgent"
```

## 📊 Monitoreo

- **Vercel Dashboard**: Monitorear deployments
- **GitHub Actions**: Ver CI/CD status
- **Performance**: Lighthouse scores
- **Errors**: Sentry (si se configura)

---

**Recuerda**: Nunca hacer push directo a `main`. Siempre usar Pull Requests.