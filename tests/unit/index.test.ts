import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Провести action design для feature “прохождение упражнения”.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Action taxonomy: event storming для frontend-state");
    expect(exerciseContract.exercise).toBe("Провести action design для feature “прохождение упражнения”.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["event action","pure reducer","immutable state update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Action taxonomy: event storming для frontend-state",
      exercise: "Провести action design для feature “прохождение упражнения”.",
      feature: "action taxonomy event storming dly",
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
