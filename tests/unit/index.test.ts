import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Перенести CoursesFeature из root providers в lazy route providers.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Lazy feature registration и teardown feature-state");
    expect(exerciseContract.exercise).toBe("Перенести CoursesFeature из root providers в lazy route providers.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["state boundary","typed contract","ui projection"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Lazy feature registration и teardown feature-state",
      exercise: "Перенести CoursesFeature из root providers в lazy route providers.",
      feature: "lazy feature registration i teardo",
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
