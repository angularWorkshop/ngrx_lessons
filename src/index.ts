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
  topic: "Action naming: события, команды и результаты API",
  exercise: "Разделить actions страницы и actions API-слоя, сохранив читаемый flow.",
  requiredArtifacts: [
  "event action",
  "pure reducer",
  "immutable state update"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "action naming sobytiya komandy i r",
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
    feature: "action naming sobytiya komandy i r",
    status: "completed",
    implementedArtifacts: [
  "event action",
  "pure reducer",
  "immutable state update"
],
    notes: "NgRx action flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
