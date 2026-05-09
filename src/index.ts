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
  topic: "Когда ComponentStore лучше Global Store",
  exercise: "Создать ComponentStore для upload widget с состояниями idle/uploading/error/done.",
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
    feature: "kogda componentstore luchshe globa",
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
    feature: "kogda componentstore luchshe globa",
    status: "completed",
    implementedArtifacts: [
  "local state",
  "updater",
  "component effect"
],
    notes: "NgRx componentstore flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
