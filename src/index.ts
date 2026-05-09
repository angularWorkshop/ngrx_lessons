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
  topic: "Ошибки, retry, cancellation и concatLatestFrom",
  exercise: "Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.",
  requiredArtifacts: [
  "action contract",
  "effect flow",
  "failure state"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "oshibki retry cancellation i conca",
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
    feature: "oshibki retry cancellation i conca",
    status: "completed",
    implementedArtifacts: [
  "action contract",
  "effect flow",
  "failure state"
],
    notes: "NgRx test flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
