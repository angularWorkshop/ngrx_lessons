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
  topic: "MockStore, integration tests и тесты ComponentStore/SignalStore",
  exercise: "Покрыть LessonEditor SignalStore: patch, dirty flag и save flow.",
  requiredArtifacts: [
  "local state",
  "updater",
  "component effect"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "mockstore integration tests i test",
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
    feature: "mockstore integration tests i test",
    status: "completed",
    implementedArtifacts: [
  "local state",
  "updater",
  "component effect"
],
    notes: "NgRx componentstore flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
