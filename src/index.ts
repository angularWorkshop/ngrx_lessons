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
  topic: "Подключение NgRx в standalone Angular-приложении",
  exercise: "Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.",
  requiredArtifacts: [
  "root store provider",
  "devtools setup",
  "runtime check boundary"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "podklyuchenie ngrx v standalone an",
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
    feature: "podklyuchenie ngrx v standalone an",
    status: "draft",
    implementedArtifacts: [],
    notes: "TODO: explain the completed NgRx flow here.",
  };
}
