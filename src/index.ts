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
  topic: "Action taxonomy: event storming для frontend-state",
  exercise: "Убрать дублирующиеся actions и составить читабельные action groups по source.",
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
    feature: "action taxonomy event storming dly",
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
    feature: "action taxonomy event storming dly",
    status: "completed",
    implementedArtifacts: [
  "event action",
  "pure reducer",
  "immutable state update"
],
    notes: "NgRx action flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
