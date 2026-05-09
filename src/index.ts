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
  topic: "Facade pattern: удобный слой для компонентов или лишняя обёртка?",
  exercise: "Исправить facade, которая скрывает слишком много разной логики и стала god-service.",
  requiredArtifacts: [
  "test scenario",
  "mocked dependency",
  "asserted contract"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "facade pattern udobnyy sloy dlya k",
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
    feature: "facade pattern udobnyy sloy dlya k",
    status: "draft",
    implementedArtifacts: [],
    notes: "TODO: explain the completed NgRx flow here.",
  };
}
