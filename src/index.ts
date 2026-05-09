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
  topic: "EntityAdapter: ids/entities вместо ручной нормализации",
  exercise: "Перевести CoursesState с массива на EntityAdapter.",
  requiredArtifacts: [
  "entity adapter",
  "ids/entities state",
  "collection selectors"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "entityadapter ids entities vmesto",
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
    feature: "entityadapter ids entities vmesto",
    status: "completed",
    implementedArtifacts: [
  "entity adapter",
  "ids/entities state",
  "collection selectors"
],
    notes: "NgRx entity flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
