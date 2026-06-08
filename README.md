# DevQuest

DevQuest is a pet project for frontend interview preparation in a game-like format.

The goal is to build a real production-style app while practicing modern frontend architecture, SSR, backend routes, database work, and state management.

## Idea

DevQuest helps frontend developers prepare for interviews through topics, questions, interview sessions, progress tracking, weak areas, and daily practice routines.

Instead of reading theory passively, the user answers questions, tracks progress, earns experience, and unlocks harder topics.

## Core Features

- Topic roadmap for frontend skills
- Question cards by level and difficulty
- Interview mode with timed questions
- User progress tracking
- Weak topics dashboard
- Daily practice routine
- Self-assessment after answers
- Session history

## Tech Stack

- Next.js App Router
- TypeScript
- Vercel
- Vercel Route Handlers
- Postgres
- Drizzle ORM
- MobX
- Ant Design
- Tailwind CSS
- Zod
- Vitest
- Playwright

## Architecture Direction

The app should use a modular structure inspired by Feature-Sliced Design.

Server Components are used for data loading and SSR.
Client Components are used only when interactivity is required.
MobX is used for local client-side UI state.
Database access is isolated from UI components.

## Main Domains

- Topic
- Question
- Interview Session
- Answer
- Progress
- User

## Project Status

Initial development stage.

The first goal is to build an MVP with mocked data:

- dashboard page
- topics list
- question page
- interview session flow
- local progress state

Database integration comes after the basic flow is stable.

## Development Principle

Build small, useful parts every day.

Each feature should be understandable, typed, and easy to explain during a frontend interview.