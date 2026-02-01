# Dr Fahd Jendoubi - Ophthalmologist Website

## Overview

A professional bilingual (French/Arabic) single-page website for Dr Fahd Jendoubi, an ophthalmologist practicing in Ezzahrouni, Tunis. The site showcases the doctor's qualifications, specialties, and provides a contact form for patient inquiries. Built with a modern React frontend and Express backend with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for smooth transitions and scroll effects
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Internationalization**: Custom language context supporting French (LTR) and Arabic (RTL) with dynamic font switching (Inter vs Cairo)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **API Pattern**: RESTful endpoints defined in shared/routes.ts with Zod schema validation
- **Build System**: Vite for frontend, esbuild for server bundling

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Page components (Home, 404)
    hooks/        # Custom React hooks (language, inquiries, toast)
    lib/          # Utility functions and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database abstraction layer
  db.ts           # Drizzle database connection
shared/           # Shared code between frontend and backend
  schema.ts       # Drizzle database schema definitions
  routes.ts       # API route contracts with Zod validation
```

### Key Design Patterns
- **Shared Schema**: Database models and API validation schemas are defined once in `shared/schema.ts` and reused across frontend and backend
- **Type-Safe API**: Route definitions in `shared/routes.ts` include path, method, input schema, and response types
- **RTL Support**: Language context manages direction switching for Arabic content with `dir="rtl"` attribute handling

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries with schema defined in `shared/schema.ts`
- **Drizzle Kit**: Database migrations via `npm run db:push`

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Underlying headless component primitives for accessibility

### Key NPM Packages
- `@tanstack/react-query`: Async state management for API calls
- `framer-motion`: Animation library for page transitions
- `zod`: Runtime type validation for forms and API requests
- `drizzle-zod`: Automatic Zod schema generation from Drizzle tables

### Fonts (External)
- Google Fonts: Inter (Latin), Cairo (Arabic), DM Sans, Fira Code, Geist Mono