import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить persistence только для фильтров курса с версией state.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Persistence, SSR/hydration и миграции state shape");
    expect(exerciseContract.exercise).toBe("Добавить persistence только для фильтров курса с версией state.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["state boundary","typed contract","ui projection"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Persistence, SSR/hydration и миграции state shape",
      exercise: "Добавить persistence только для фильтров курса с версией state.",
      feature: "persistence ssr hydration i migrac",
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
