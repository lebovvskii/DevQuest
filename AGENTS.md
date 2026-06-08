## Project

This repository contains DevQuest, a Next.js pet project for frontend interview preparation.

The app should be treated as a production-style learning project, not as a simple demo.

## Main Goal

Help the user practice frontend interviews while building a strong portfolio project.

Prioritize architecture, readability, type safety, SSR, state separation, and practical frontend patterns.

## Stack

Use:

- Next.js App Router
- TypeScript
- React Server Components
- Vercel Route Handlers
- Postgres
- Drizzle ORM
- MobX
- Ant Design
- Tailwind CSS
- Zod

Do not introduce additional major libraries without a clear reason.

## Architecture Rules

Prefer modular architecture.

Use this direction:

- `app` for routes, layouts, pages, and route handlers
- `entities` for domain models
- `features` for user actions
- `widgets` for composed UI blocks
- `shared` for reusable UI, config, utils, API, and DB code

Avoid putting business logic directly inside pages.

## Rendering Rules

Use Server Components by default.

Use Client Components only for:

- MobX stores
- forms
- timers
- modals
- interactive interview flow
- local UI state

Keep client boundaries small.

## State Rules

Use MobX only for client-side interactive state.

Good MobX use cases:

- current interview step
- timer state
- draft answer text
- modal state
- UI filters

Do not use MobX as a replacement for server data or database state.

## Code Style

Write simple, explicit TypeScript.

Prefer readable names over clever abstractions.

Avoid premature optimization.

Every exported type, function, or component should have a clear reason to exist.

## First Milestone

Build MVP with mocked data:

- dashboard
- topic list
- topic details
- interview start
- interview session screen
- basic progress summary