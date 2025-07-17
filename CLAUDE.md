# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Viretec 2025 - Corporate website for Viretec Venture Studio, built with Next.js 14 and TypeScript. The site positions Viretec as Mexico's leading venture studio, connecting entrepreneurs, investors, companies, and universities.

## Core Commands
- `npm run dev` - Start development server on localhost:3002
- `npm run build` - Build for production
- `npm run start` - Start production server on port 3002
- `npm run lint` - Run ESLint

## Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS with custom metallic design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Project Structure
```
app/
├── components/
│   ├── atoms/          # Basic UI components (buttons, inputs)
│   ├── molecules/      # Composite components (cards, form fields)
│   ├── organisms/      # Complex components (header, footer, sections)
│   └── templates/      # Page layouts
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
└── types/              # TypeScript type definitions
```

## Design System - Metallic Theme
The site uses a sophisticated metallic color palette:
- **Base Colors**: Negro Carbon (#1A1A1A), Gris Titanio (#878E99)
- **Premium Metals**: Plateado Cromado (#C0C0C0), Dorado Metálico (#D4AF37)
- **Accent Colors**: Azul Acero (#4A90A4), Verde Cromo (#4A7C59)

### Key CSS Classes
- `.metal-button` - Metallic gradient buttons with shine effect
- `.metal-card` - Cards with metallic borders and gradients
- `.text-gradient-metal` - Metallic text gradients
- `.hero-gradient` - Hero section background gradient

## Page Structure
- `/` - Homepage with Hero, Services, About, Portfolio, Contact
- `/ecosistema` - Venture Studio ecosystem (4 sub-sections)
- `/soluciones` - Segmented solutions for 4 target audiences
- `/impacto` - Impact metrics and case studies
- `/recursos` - Blog and educational content
- `/nosotros` - About us and team
- `/contacto` - Intelligent contact form

## Target Audiences
1. **Entrepreneurs/Innovators** - Need validation, funding, mentorship
2. **Investors/Funds** - Seek qualified deal flow and professional management
3. **Companies/Industry** - Want innovation solutions for complex challenges
4. **Universities/Research** - Need tech transfer and IP commercialization

## Development Guidelines
- Use TypeScript for all new components
- Follow Atomic Design principles
- Implement responsive design (mobile-first)
- Use Framer Motion for animations
- Maintain accessibility standards (WCAG AA)
- Optimize for Core Web Vitals (LCP < 1.2s)

## Brand Message
"Innovamos para mejorar el mundo y somos felices haciéndolo"
Viretec transforms innovative ideas into profitable and sustainable projects through their unique venture studio model.

## Key Features to Implement
- [ ] Segmented landing pages for each audience
- [ ] Intelligent contact forms with progressive disclosure
- [ ] Project showcase with filtering
- [ ] Blog/resources section
- [ ] Team and about pages
- [ ] Impact metrics dashboard

## Performance Targets
- Lighthouse Score: 95+ on all categories
- Core Web Vitals: All green
- Bundle size: < 200KB initial load
- Time to Interactive: < 3s

## Conversion Optimization
- Multiple CTAs per page targeting different audiences
- Social proof and testimonials
- Case studies and success metrics
- Progressive disclosure in forms
- A/B testing ready components