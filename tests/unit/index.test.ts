import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить conflict action, если сервер вернул более свежую версию progress.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Optimistic update, rollback и conflict handling");
    expect(exerciseContract.exercise).toBe("Добавить conflict action, если сервер вернул более свежую версию progress.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["event action","pure reducer","immutable state update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Optimistic update, rollback и conflict handling",
      exercise: "Добавить conflict action, если сервер вернул более свежую версию progress.",
      feature: "optimistic update rollback i confl",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["event action","pure reducer","immutable state update"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("action");
  });
});
