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
  topic: "Store как read model: компонент читает, но не управляет деталями",
  exercise: "Перевести selectedCourse на selectSignal-чтение без прямого доступа к state shape.",
  requiredArtifacts: [
  "store read model",
  "selectSignal read",
  "thin component"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "store kak read model komponent chi",
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
    feature: "store kak read model komponent chi",
    status: "completed",
    implementedArtifacts: [
  "store read model",
  "selectSignal read",
  "thin component"
],
    notes: "NgRx read model flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
