import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Runtime checks, serializability и meta-reducers на старте");
    expect(exerciseContract.exercise).toBe("Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["event action","pure reducer","immutable state update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Runtime checks, serializability и meta-reducers на старте",
      exercise: "Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.",
      feature: "runtime checks serializability i m",
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
    expect(result.notes.toLowerCase()).toContain("reducer");
  });
});
