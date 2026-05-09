import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Cache invalidation и refresh policy");
    expect(exerciseContract.exercise).toBe("Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["request status","cache policy","rollback path"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Cache invalidation и refresh policy",
      exercise: "Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.",
      feature: "cache invalidation i refresh polic",
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
    expect(result.notes.toLowerCase()).toContain("cache");
  });
});
