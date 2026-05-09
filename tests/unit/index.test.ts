import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Реализовать optimistic toggle favorite с rollback при ошибке API.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Optimistic update, rollback и conflict handling");
    expect(exerciseContract.exercise).toBe("Реализовать optimistic toggle favorite с rollback при ошибке API.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["request status","cache policy","rollback path"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Optimistic update, rollback и conflict handling",
      exercise: "Реализовать optimistic toggle favorite с rollback при ошибке API.",
      feature: "optimistic update rollback i confl",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["request status","cache policy","rollback path"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
