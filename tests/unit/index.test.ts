import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Переписать простой ComponentStore-сценарий на SignalStore и сравнить читаемость.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("SignalStore basics: withState, withComputed, withMethods");
    expect(exerciseContract.exercise).toBe("Переписать простой ComponentStore-сценарий на SignalStore и сравнить читаемость.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["local state","updater","component effect"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "SignalStore basics: withState, withComputed, withMethods",
      exercise: "Переписать простой ComponentStore-сценарий на SignalStore и сравнить читаемость.",
      feature: "signalstore basics withstate withc",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["local state","updater","component effect"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("componentstore");
  });
});
