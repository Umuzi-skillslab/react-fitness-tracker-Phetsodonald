# FitTrack — Fitness Tracker & Workout Planner

FitTrack is a responsive React application for browsing exercises, building a seven-day workout plan, logging completed sessions, and viewing progress.

## Features
- Search exercises by name.
- Filter by category, muscle group, and difficulty.
- View exercise instructions and demonstration video.
- Play a motivational audio track.
- Add exercises to a Monday-Sunday planner.
- Remove exercises or clear a day.
- Persist planner and workout history with localStorage.
- Log sets, reps, weight, and date.
- Calculate planned calories and workout streak.
- Responsive navigation with active route styling.
- Dynamic exercise detail routes and a 404 page.
- Jest + React Testing Library test suite.

## Technologies
React, Vite, React Router DOM, PropTypes, CSS Modules, Jest, React Testing Library, User Event.

## Installation
```bash
npm install
npm run dev
npm test
npm run coverage
```

The app is available at the Vite development URL printed in the terminal.

## Project structure
`src/components/` contains reusable UI and feature components. `src/pages/` contains route-level screens. `src/data/` stores sample exercise data. `src/hooks/` contains reusable state logic. `src/utils/` contains calculations and formatting helpers. Tests live beside their components and in `src/__tests__/integration/`.

## Component architecture
Reusable components include Button, Card, SearchBar, Modal, Badge, Loading, EmptyState, Navbar, DayCard, LogEntry, VideoPlayer, and AudioPlayer. Feature components compose these primitives rather than duplicating UI logic.

## State management
App owns shared workout-plan and history state. Exercise search/filter state stays in ExercisesPage, while workout form state stays in WorkoutLog. The custom `useLocalStorage` hook keeps planner and history state persistent across refreshes. Derived statistics are calculated from current state.

## Routing
- `/` — Home
- `/exercises` — exercise browser
- `/exercises/:id` — dynamic exercise detail
- `/workout-planner` — weekly planner
- `/history` — workout logging/history
- `/progress` — progress dashboard
- `*` — 404 page

## Testing strategy
Tests cover reusable components, exercise rendering and states, hook persistence, helper calculations, routing, user interactions, and integration flows. Async tests verify delayed exercise loading. Mock functions verify callback-based parent-child communication. The target is greater than 70% line and branch coverage for components.

Run:
```bash
npm run coverage
```

After running it, record the final percentages from Jest in the submission README and capture a screenshot for the required evidence.

## Screenshots
1. Home page
2. Exercises page with filters
3. Exercise detail with video
4. Workout planner
5. Workout history
6. Progress page
7. Mobile responsive view
8. Jest coverage report

## Future enhancements
Potential upgrades include user accounts, cloud synchronization, richer charts, exercise favorites, custom routines, reminders, and a backend API.

## Submission checklist
Run the production build, run all tests, verify the coverage threshold, check every route, test mobile layouts, add screenshots, and commit frequently with meaningful messages.
