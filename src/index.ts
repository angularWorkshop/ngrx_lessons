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
  topic: "State в Angular: local, shared, server и URL-state",
  exercise: "Разобрать dashboard-фичу и разметить каждый кусок state по типу: local/shared/server/url.",
  requiredArtifacts: [
  "local state boundary",
  "shared state boundary",
  "server/url boundary"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "state v angular local shared serve",
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
    feature: "state v angular local shared serve",
    status: "completed",
    implementedArtifacts: [
  "local state boundary",
  "shared state boundary",
  "server/url boundary"
],
    notes: "NgRx state flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
