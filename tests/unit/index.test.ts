import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить entities в SignalStore для списка курсов.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("SignalStore entities и feature composition");
    expect(exerciseContract.exercise).toBe("Добавить entities в SignalStore для списка курсов.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["signal state","computed signal","rx method"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "SignalStore entities и feature composition",
      exercise: "Добавить entities в SignalStore для списка курсов.",
      feature: "signalstore entities i feature com",
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
