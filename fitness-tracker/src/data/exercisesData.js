export const exercisesData = [
  {
    id: 1,
    name: 'Barbell Back Squat',
    category: 'strength',
    muscleGroups: ['legs', 'glutes', 'core'],
    difficulty: 'intermediate',
    duration: 12,
    sets: 3,
    reps: 10,
    equipment: 'barbell',
    caloriesBurn: 70,
    instructions: [
      'Stand with the barbell positioned securely across your upper back.',
      'Bend your knees and lower your hips with control.',
      'Drive through your feet to return to standing.'
    ],
    videoUrl: '/assets/videos/barbell-back-squat.mp4'
  },

  {
    id: 2,
    name: 'Barbell Bench Press',
    category: 'strength',
    muscleGroups: ['chest', 'arms', 'shoulders'],
    difficulty: 'intermediate',
    duration: 12,
    sets: 3,
    reps: 10,
    equipment: 'barbell',
    caloriesBurn: 75,
    instructions: [
      'Lie flat on the bench and grip the barbell securely.',
      'Lower the bar toward your chest with control.',
      'Press the bar upward until your arms are extended.'
    ],
    videoUrl: '/assets/videos/barbell-bench-press.mp4'
  },

  {
    id: 3,
    name: 'Barbell Deadlift',
    category: 'strength',
    muscleGroups: ['back', 'legs', 'glutes', 'core'],
    difficulty: 'advanced',
    duration: 15,
    sets: 3,
    reps: 8,
    equipment: 'barbell',
    caloriesBurn: 90,
    instructions: [
      'Stand with your feet around hip-width apart.',
      'Hinge at your hips and grip the barbell.',
      'Drive through your feet and stand tall while keeping the bar close.'
    ],
    videoUrl: '/assets/videos/barbell-deadlift.mp4'
  },

  {
    id: 4,
    name: 'Dumbbell Lateral Raise',
    category: 'strength',
    muscleGroups: ['shoulders'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'dumbbells',
    caloriesBurn: 40,
    instructions: [
      'Stand tall while holding a dumbbell in each hand.',
      'Raise your arms out to the sides with control.',
      'Lower the dumbbells slowly.'
    ],
    videoUrl: '/assets/videos/dumbbell-lateral-raise.mp4'
  },

  {
    id: 5,
    name: 'Hammer Curls',
    category: 'strength',
    muscleGroups: ['arms'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'dumbbells',
    caloriesBurn: 40,
    instructions: [
      'Hold dumbbells with your palms facing inward.',
      'Curl the dumbbells toward your shoulders.',
      'Lower them slowly to the starting position.'
    ],
    videoUrl: '/assets/videos/hammer-curls.mp4'
  },

  {
    id: 6,
    name: 'Bent Over Barbell Row',
    category: 'strength',
    muscleGroups: ['back', 'arms'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'barbell',
    caloriesBurn: 65,
    instructions: [
      'Hinge forward while keeping your back controlled.',
      'Pull the barbell toward your torso.',
      'Lower the bar with control.'
    ],
  },

  {
    id: 7,
    name: 'Dumbbell Renegade Row',
    category: 'strength',
    muscleGroups: ['back', 'arms', 'core'],
    difficulty: 'advanced',
    duration: 10,
    sets: 3,
    reps: 8,
    equipment: 'dumbbells',
    caloriesBurn: 70,
    instructions: [
      'Start in a plank position holding dumbbells.',
      'Row one dumbbell toward your side.',
      'Lower it and repeat on the other side.'
    ],
  },

  {
    id: 8,
    name: 'Kettlebell Swing',
    category: 'cardio',
    muscleGroups: ['legs', 'glutes', 'core', 'shoulders'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 15,
    equipment: 'kettlebell',
    caloriesBurn: 85,
    instructions: [
      'Stand with the kettlebell between your feet.',
      'Hinge at your hips and swing the kettlebell forward.',
      'Control the kettlebell as it returns between your legs.'
    ],
    videoUrl: '/assets/videos/kettlebell-swing.mp4'
  },

  {
    id: 9,
    name: 'Barbell Overhead Press',
    category: 'strength',
    muscleGroups: ['shoulders', 'arms', 'core'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'barbell',
    caloriesBurn: 60,
    instructions: [
      'Hold the barbell at shoulder height.',
      'Press the barbell overhead.',
      'Lower it back to shoulder height with control.'
    ],
  },

  {
    id: 10,
    name: 'Dumbbell Snatch',
    category: 'cardio',
    muscleGroups: ['legs', 'shoulders', 'arms', 'core'],
    difficulty: 'advanced',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'dumbbells',
    caloriesBurn: 90,
    instructions: [
      'Start with the dumbbell near the floor.',
      'Drive through your legs and hips.',
      'Lift the dumbbell overhead in one controlled movement.'
    ],
    videoUrl: '/assets/videos/dumbbell-snatch.mp4'
  },

  {
    id: 11,
    name: 'Barbell Hip Thrust',
    category: 'strength',
    muscleGroups: ['glutes', 'legs', 'core'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 12,
    equipment: 'barbell',
    caloriesBurn: 65,
    instructions: [
      'Position your upper back against a bench.',
      'Place the barbell securely across your hips.',
      'Drive your hips upward and lower them with control.'
    ],
    videoUrl: '/assets/videos/barbell-hip-thrust.mp4'
  },

  {
    id: 12,
    name: 'Lat Pulldown with V-Grip',
    category: 'strength',
    muscleGroups: ['back', 'arms'],
    difficulty: 'beginner',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'cable machine',
    caloriesBurn: 55,
    instructions: [
      'Sit securely at the lat pulldown machine.',
      'Pull the V-grip handle toward your upper chest.',
      'Return the handle slowly.'
    ],
    videoUrl: '/assets/videos/lat-pulldown-v-grip.mp4'
  },

  {
    id: 13,
    name: 'Seated Cable Row Neutral Grip',
    category: 'strength',
    muscleGroups: ['back', 'arms'],
    difficulty: 'beginner',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'cable machine',
    caloriesBurn: 55,
    instructions: [
      'Sit upright and grip the cable handle.',
      'Pull the handle toward your torso.',
      'Extend your arms slowly.'
    ],
    videoUrl: '/assets/videos/seated-cable-row.mp4'
  },

  {
    id: 14,
    name: 'Pec Deck Fly',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 45,
    instructions: [
      'Sit comfortably on the pec deck machine.',
      'Bring the handles together in front of your chest.',
      'Return slowly to the starting position.'
    ],
    videoUrl: '/assets/videos/pec-deck-fly.mp4'
  },

  {
    id: 15,
    name: 'Incline Machine Press',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders', 'arms'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'machine',
    caloriesBurn: 55,
    instructions: [
      'Sit securely on the incline press machine.',
      'Push the handles forward.',
      'Return the handles slowly.'
    ],
    videoUrl: '/assets/videos/incline-machine-press.mp4'
  },

  {
    id: 16,
    name: 'Cable Tricep Pushdown',
    category: 'strength',
    muscleGroups: ['arms'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'cable machine',
    caloriesBurn: 40,
    instructions: [
      'Stand facing the cable machine.',
      'Push the handle downward while keeping your elbows controlled.',
      'Return the handle slowly.'
    ],
    videoUrl: '/assets/videos/cable-tricep-pushdown.mp4'
  },

  {
    id: 17,
    name: 'Overhead Cable Rope Extension',
    category: 'strength',
    muscleGroups: ['arms'],
    difficulty: 'intermediate',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'cable machine',
    caloriesBurn: 40,
    instructions: [
      'Hold the rope behind or above your head.',
      'Extend your arms while keeping your elbows controlled.',
      'Return slowly to the starting position.'
    ],
    videoUrl: '/assets/videos/overhead-cable-rope-extension.mp4'
  },

  {
    id: 18,
    name: 'Machine Bicep Curl',
    category: 'strength',
    muscleGroups: ['arms'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 40,
    instructions: [
      'Sit securely on the machine.',
      'Curl the handles toward you.',
      'Lower them slowly.'
    ],
    videoUrl: '/assets/videos/machine-bicep-curl.mp4'
  },

  {
    id: 19,
    name: 'High Cable Curl',
    category: 'strength',
    muscleGroups: ['arms'],
    difficulty: 'intermediate',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'cable machine',
    caloriesBurn: 40,
    instructions: [
      'Stand between the cable handles.',
      'Curl the handles toward your shoulders.',
      'Return your arms slowly.'
    ],
    videoUrl: '/assets/videos/high-cable-curl.mp4'
  },

  {
    id: 20,
    name: 'Leg Extension',
    category: 'strength',
    muscleGroups: ['legs'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 45,
    instructions: [
      'Sit securely on the leg extension machine.',
      'Extend your legs upward.',
      'Lower them slowly.'
    ],
    videoUrl: '/assets/videos/leg-extension.mp4'
  },

  {
    id: 21,
    name: 'Hack Squat',
    category: 'strength',
    muscleGroups: ['legs', 'glutes'],
    difficulty: 'intermediate',
    duration: 10,
    sets: 3,
    reps: 10,
    equipment: 'machine',
    caloriesBurn: 70,
    instructions: [
      'Position yourself securely on the hack squat machine.',
      'Lower your body with control.',
      'Push through your feet to return upward.'
    ],
    videoUrl: '/assets/videos/hack-squat.mp4'
  },

  {
    id: 22,
    name: 'Lying Leg Curl',
    category: 'strength',
    muscleGroups: ['legs'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 45,
    instructions: [
      'Lie face down on the leg curl machine.',
      'Curl your heels toward your body.',
      'Lower the weight slowly.'
    ],
    videoUrl: '/assets/videos/lying-leg-curl.mp4'
  },

  {
    id: 23,
    name: 'Glute Kickback Machine',
    category: 'strength',
    muscleGroups: ['glutes', 'legs'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 40,
    instructions: [
      'Position yourself securely on the machine.',
      'Push one leg backward.',
      'Return slowly and repeat on the other side.'
    ],
    videoUrl: '/assets/videos/glute-kickback-machine.mp4'
  },

  {
    id: 24,
    name: 'Machine Reverse Fly',
    category: 'strength',
    muscleGroups: ['shoulders', 'back'],
    difficulty: 'beginner',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'machine',
    caloriesBurn: 40,
    instructions: [
      'Sit facing the machine pad.',
      'Move your arms outward and backward.',
      'Return slowly to the starting position.'
    ],
    videoUrl: '/assets/videos/machine-reverse-fly.mp4'
  },

  {
    id: 25,
    name: 'Cable Woodchop (High to Low)',
    category: 'strength',
    muscleGroups: ['core', 'shoulders'],
    difficulty: 'intermediate',
    duration: 8,
    sets: 3,
    reps: 12,
    equipment: 'cable machine',
    caloriesBurn: 50,
    instructions: [
      'Stand beside the cable machine and grip the handle.',
      'Pull the cable diagonally from high to low across your body.',
      'Return slowly and repeat on the other side.'
    ],
    videoUrl: '/assets/videos/cable-woodchop-high-to-low.mp4'
  }
];