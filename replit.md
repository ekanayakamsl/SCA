# Strong Cents Associates - Professional Financial Services Website

## Overview

Strong Cents Associates is a professional financial services company based in Sri Lanka, offering comprehensive accounting, tax, HR, and audit services. This is a modern full-stack web application built to showcase their services and provide a contact form for potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration

### UI/UX Design System
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Design System**: "New York" style variant
- **Theme**: Professional blue/gold color scheme
- **Typography**: Inter font family
- **Icons**: Lucide React icons

## Key Components

### Frontend Components
- **Layout Components**: Header, Footer with sticky navigation
- **Page Sections**: Hero, Services Overview, About, Detailed Services, Contact
- **Form Components**: Contact form with comprehensive validation
- **UI Components**: Full shadcn/ui component library implementation

### Backend Services
- **Contact Management**: API endpoints for contact form submission and retrieval
- **Data Storage**: Currently using in-memory storage with plan for PostgreSQL migration
- **Request Logging**: Comprehensive API request/response logging
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Contacts Table**: Stores client inquiries with fields for name, email, phone, company, service type, and message
- **Validation**: Zod schemas for type-safe data validation
- **Timestamps**: Automatic created_at timestamps

## Data Flow

1. **Client Interaction**: Users browse services and fill out contact form
2. **Form Submission**: React Hook Form validates data using Zod schemas
3. **API Request**: TanStack Query handles API communication
4. **Server Processing**: Express routes validate and store contact data
5. **Response Handling**: Success/error feedback displayed to user
6. **Data Persistence**: Contact information stored for follow-up

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting

### UI/Styling Dependencies
- Tailwind CSS for styling
- Radix UI primitives for accessible components
- Class Variance Authority for component variants
- Lucide React for icons

### Form and Validation
- React Hook Form for form management
- Zod for schema validation
- Hookform Resolvers for integration

### Development Tools
- Vite for development server and building
- ESBuild for server bundling
- TSX for TypeScript execution
- Replit-specific development plugins

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with hot reloading
- **API Server**: Express server with automatic restarts
- **Database**: Neon serverless PostgreSQL
- **Environment**: Replit cloud development environment

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Served by Express in production
4. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: Required environment variable for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **Build Scripts**: Separate scripts for development, building, and production

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```