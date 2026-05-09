import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Собрать selectors поверх EntityAdapter для списка карточек и selected course.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Entity selectors и view models для коллекций");
    expect(exerciseContract.exercise).toBe("Собрать selectors поверх EntityAdapter для списка карточек и selected course.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["source selector","derived selector","view model"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Entity selectors и view models для коллекций",
      exercise: "Собрать selectors поверх EntityAdapter для списка карточек и selected course.",
      feature: "entity selectors i view models dly",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["source selector","derived selector","view model"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("selector");
  });
});
