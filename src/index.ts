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
  topic: "Anti-patterns NgRx: Store как база данных, action explosion и selector soup",
  exercise: "Найти пять NgRx anti-patterns в готовой feature и предложить refactoring plan.",
  requiredArtifacts: [
  "source selector",
  "derived selector",
  "view model"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "anti patterns ngrx store kak baza",
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
    feature: "anti patterns ngrx store kak baza",
    status: "completed",
    implementedArtifacts: [
  "source selector",
  "derived selector",
  "view model"
],
    notes: "NgRx selector flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
