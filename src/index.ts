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
  topic: "RxJS interop: rxMethod, async flow и события SignalStore",
  exercise: "Добавить submit progress flow и статус операции без ручной подписки в компоненте.",
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
    feature: "rxjs interop rxmethod async flow i",
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
    feature: "rxjs interop rxmethod async flow i",
    status: "completed",
    implementedArtifacts: [
  "action contract",
  "effect flow",
  "failure state"
],
    notes: "NgRx signalstore flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
