import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Создать custom feature withPagedEntities и применить её к двум SignalStore.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("SignalStore hooks, props, events и кастомные features");
    expect(exerciseContract.exercise).toBe("Создать custom feature withPagedEntities и применить её к двум SignalStore.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["signal state","computed signal","rx method"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "SignalStore hooks, props, events и кастомные features",
      exercise: "Создать custom feature withPagedEntities и применить её к двум SignalStore.",
      feature: "signalstore hooks props events i k",
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
