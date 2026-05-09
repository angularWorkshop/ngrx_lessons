import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Реализовать reducer для load/request/success/failure состояний.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Reducer как чистая функция перехода состояния");
    expect(exerciseContract.exercise).toBe("Реализовать reducer для load/request/success/failure состояний.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["event action","pure reducer","immutable state update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Reducer как чистая функция перехода состояния",
      exercise: "Реализовать reducer для load/request/success/failure состояний.",
      feature: "reducer kak chistaya funkciya pere",
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
