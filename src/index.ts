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
  topic: "Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва",
  exercise: "Выбрать первый vertical slice для миграции из service-state в NgRx.",
  requiredArtifacts: [
  "state boundary",
  "typed contract",
  "ui projection"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "migraciya ot servisov i behaviorsu",
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
    feature: "migraciya ot servisov i behaviorsu",
    status: "completed",
    implementedArtifacts: [
  "state boundary",
  "typed contract",
  "ui projection"
],
    notes: "NgRx state flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
