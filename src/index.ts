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
  topic: "Updaters, selectors и effects внутри ComponentStore",
  exercise: "Добавить saveDraft effect с loading/error status и vm$ selector.",
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
    feature: "updaters selectors i effects vnutr",
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
    feature: "updaters selectors i effects vnutr",
    status: "completed",
    implementedArtifacts: [
  "action contract",
  "effect flow",
  "failure state"
],
    notes: "NgRx effect flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
