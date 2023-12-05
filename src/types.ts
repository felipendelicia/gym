export interface Routine {
  name: string;
  exercises: any[];
}

export interface RoutineExercise {
  exercise: Exercise,
  sets: Set[],
  description?: string
}

export interface Exercise {
  name: string;
  mainMuscle: string,
  extraMuscles: string[]
}

export interface Set {
  reps: number
}