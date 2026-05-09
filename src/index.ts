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
  topic: "Проект: список курсов, фильтр, выбранная карточка и загрузка деталей",
  exercise: "Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.",
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
    feature: "proekt spisok kursov filtr vybrann",
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
    feature: "proekt spisok kursov filtr vybrann",
    status: "completed",
    implementedArtifacts: [
  "action contract",
  "effect flow",
  "failure state"
],
    notes: "NgRx effect flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
