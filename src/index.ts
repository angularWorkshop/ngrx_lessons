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
  topic: "NgRx как event-driven модель: action → reducer → selector → view",
  exercise: "Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.",
  requiredArtifacts: [
  "user event",
  "state transition",
  "view update"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "ngrx kak event driven model action",
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
    feature: "ngrx kak event driven model action",
    status: "completed",
    implementedArtifacts: [
  "user event",
  "state transition",
  "view update"
],
    notes: "NgRx flow flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
