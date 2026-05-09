import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Создать SignalStore для локального фильтра курсов и derived filtered list.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("SignalStore basics: withState, withComputed, withMethods");
    expect(exerciseContract.exercise).toBe("Создать SignalStore для локального фильтра курсов и derived filtered list.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["signal state","computed signal","rx method"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "SignalStore basics: withState, withComputed, withMethods",
      exercise: "Создать SignalStore для локального фильтра курсов и derived filtered list.",
      feature: "signalstore basics withstate withc",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["signal state","computed signal","rx method"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("signalstore");
  });
});
