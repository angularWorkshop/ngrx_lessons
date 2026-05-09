import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("RxJS interop: rxMethod, async flow и события SignalStore");
    expect(exerciseContract.exercise).toBe("Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "RxJS interop: rxMethod, async flow и события SignalStore",
      exercise: "Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.",
      feature: "rxjs interop rxmethod async flow i",
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
    expect(result.notes.toLowerCase()).toContain("signalstore");
  });
});
