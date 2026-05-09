import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Store как read model: компонент читает, но не управляет деталями");
    expect(exerciseContract.exercise).toBe("Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["signal state","computed signal","rx method"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Store как read model: компонент читает, но не управляет деталями",
      exercise: "Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.",
      feature: "store kak read model komponent chi",
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
