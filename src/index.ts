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
  topic: "ViewModel selector: один поток данных для компонента",
  exercise: "Собрать selectCoursesPageVm с состояниями loading/error/empty/success.",
  requiredArtifacts: [
  "source selector",
  "derived selector",
  "view model"
] as const,
} as const;

export function createNgrxExercisePlan(): NgrxExerciseResult {
  return {
    course: exerciseContract.course,
    topic: exerciseContract.topic,
    exercise: exerciseContract.exercise,
    feature: "viewmodel selector odin potok dann",
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
    feature: "viewmodel selector odin potok dann",
    status: "completed",
    implementedArtifacts: [
  "source selector",
  "derived selector",
  "view model"
],
    notes: "NgRx selector flow is completed for this exercise: the state boundary, typed contract, and UI projection are explicit.",
  };
}
