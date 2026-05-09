import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Перевести CoursesState с массива на EntityAdapter.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("EntityAdapter: ids/entities вместо ручной нормализации");
    expect(exerciseContract.exercise).toBe("Перевести CoursesState с массива на EntityAdapter.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["entity adapter","ids/entities state","collection selectors"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "EntityAdapter: ids/entities вместо ручной нормализации",
      exercise: "Перевести CoursesState с массива на EntityAdapter.",
      feature: "entityadapter ids entities vmesto",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["entity adapter","ids/entities state","collection selectors"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("entity");
  });
});
