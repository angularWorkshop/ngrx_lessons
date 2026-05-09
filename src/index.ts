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
  exercise: "Сделать facade bridge, где старый компонент продолжает работать, а источник данных уже переехал в Store.",
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
    status: "draft",
    implementedArtifacts: [],
    notes: "TODO: explain the completed NgRx flow here.",
  };
}
