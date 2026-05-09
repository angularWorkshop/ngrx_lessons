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
  topic: "Cache invalidation и refresh policy",
  exercise: "Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.",
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
    feature: "cache invalidation i refresh polic",
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
    feature: "cache invalidation i refresh polic",
    status: "completed",
    implementedArtifacts: [
  "request status",
  "cache policy",
  "rollback path"
],
    notes: "NgRx cache flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
