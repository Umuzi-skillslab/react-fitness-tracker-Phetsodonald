# FitTrack Planning Document

## Component hierarchy
```text
App
├── Navbar
├── Routes
│   ├── Home
│   │   └── AudioPlayer
│   ├── ExercisesPage
│   │   ├── Header
│   │   ├── SearchBar
│   │   ├── ExerciseFilter
│   │   └── ExerciseList
│   │       └── ExerciseCard
│   │           ├── Card
│   │           ├── Badge
│   │           └── Button
│   ├── ExerciseDetailPage
│   │   └── ExerciseDetail
│   │       └── VideoPlayer
│   ├── WorkoutPlannerPage
│   │   └── WorkoutPlanner
│   │       └── DayCard × 7
│   ├── HistoryPage
│   │   └── WorkoutLog
│   │       └── LogEntry
│   └── ProgressPage
│       └── ProgressChart
└── Footer
```

## Data flow
```text
exercisesData ──> App/Pages ──props──> ExerciseList ──> ExerciseCard
                                  ▲             │
                                  │ callback    └── onSelect/onAdd
                                  │
workoutPlan <──── App state <─────┘
     │
     └──> WorkoutPlanner ──> DayCard ──> remove/clear callbacks

history <──── App state <──── WorkoutLog <──── LogEntry
   │
   └──> ProgressPage ──> ProgressChart

App state ⇄ localStorage (workoutPlan + workoutHistory)
```

## Components and purpose
- Navigation/Navbar: responsive route navigation and active links.
- Header/Footer: shared page chrome.
- Button/Card/Badge: reusable UI primitives.
- SearchBar/ExerciseFilter: exercise discovery controls.
- ExerciseCard/List/Detail: exercise browsing and details.
- WorkoutPlanner/DayCard: seven-day planning UI.
- WorkoutLog/LogEntry: workout entry and history.
- ProgressChart: activity visualization.
- VideoPlayer/AudioPlayer: HTML5 multimedia.
- Loading/EmptyState/ErrorMessage: reusable feedback states.
- Pages: route-level composition.
- useLocalStorage: persistent React state.

## Props strategy
Exercise data, planner state, history, calculated values, and callbacks flow from parents to children. Children communicate upward with callback props such as `onAdd`, `onRemove`, `onLog`, and `onSelect`. `children` is used by Card and Modal. PropTypes validate public component contracts.

## State strategy
App owns shared planner/history state. ExercisesPage owns search/filter/loading state. WorkoutLog owns form state. Navbar owns mobile-menu state. Shared state is persisted with `useLocalStorage`; derived values use filtering and helper functions rather than duplicated state.

## Testing strategy
- UI components: rendering, props, variants, disabled states, and callbacks.
- Exercise components: cards, filtering states, detail actions, and async loading.
- Planner/log components: rendering and parent-child callback flow.
- Pages/routing: route navigation, 404, and page-level rendering.
- Hook/utils: localStorage persistence and calculations.
- Integration: exercise-to-planner and workout logging flows.
- Async/conditional tests: loading, empty, error, and delayed data states.
