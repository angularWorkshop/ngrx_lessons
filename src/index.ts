export type ExerciseStatus = 'draft' | 'completed';

export interface NgrxExerciseResult {
  readonly course: 'NGRX';
  readonly topic: string;
  readonly exercise: string;
  readonly feature: string;
  readonly status: ExerciseStatus;
  readonly implementedArtifacts: readonly string[];
  readonly notes: string;
}

export const exerciseContract = {
  course: 'NGRX',
  topic: "Проект: управление уроками курса с локальным editor-state",
  exercise: "Реализовать локальный editor store с optimistic save, rollback и dirty-state.",
  requiredArtifacts: [
  "request status",
  "cache policy",
  "rollback path"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "proekt upravlenie urokami kursa s",
    status: 'draft',
    implementedArtifacts: [],
    notes: 'План готов: осталось реализовать контракт упражнения.',
  };
}

export function completeNgrxExercise(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "proekt upravlenie urokami kursa s",
    status: "draft",
    implementedArtifacts: [],
    notes: "TODO: explain the completed NgRx flow here.",
  };
}
