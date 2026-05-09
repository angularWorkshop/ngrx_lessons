import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Форма feature-state: что хранить, а что вычислять");
    expect(exerciseContract.exercise).toBe("Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["state boundary","typed contract","ui projection"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Форма feature-state: что хранить, а что вычислять",
      exercise: "Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.",
      feature: "forma feature state chto hranit a",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["state boundary","typed contract","ui projection"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
