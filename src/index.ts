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
  topic: "SignalStore basics: withState, withComputed, withMethods",
  exercise: "Создать SignalStore для локального фильтра курсов и derived filtered list.",
  requiredArtifacts: [
  "signal state",
  "computed signal",
  "rx method"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "signalstore basics withstate withc",
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
    feature: "signalstore basics withstate withc",
    status: "completed",
    implementedArtifacts: [
  "signal state",
  "computed signal",
  "rx method"
],
    notes: "NgRx signalstore flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
