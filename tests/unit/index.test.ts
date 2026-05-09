import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Переписать effect с ручным subscribe-like кодом на tapResponse.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("NgRx Operators: tapResponse, concatLatestFrom и читаемые async-effects");
    expect(exerciseContract.exercise).toBe("Переписать effect с ручным subscribe-like кодом на tapResponse.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "NgRx Operators: tapResponse, concatLatestFrom и читаемые async-effects",
      exercise: "Переписать effect с ручным subscribe-like кодом на tapResponse.",
      feature: "ngrx operators tapresponse concatl",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["action contract","effect flow","failure state"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("effect");
  });
});
