import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Подключение NgRx в standalone Angular-приложении");
    expect(exerciseContract.exercise).toBe("Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["runtime guard","debug signal","production-safe config"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Подключение NgRx в standalone Angular-приложении",
      exercise: "Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.",
      feature: "podklyuchenie ngrx v standalone an",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["runtime guard","debug signal","production-safe config"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
