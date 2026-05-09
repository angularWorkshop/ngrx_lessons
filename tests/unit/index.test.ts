import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить инициализацию ComponentStore по courseId и сброс при смене id.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Lifecycle, cleanup и взаимодействие с Global Store");
    expect(exerciseContract.exercise).toBe("Добавить инициализацию ComponentStore по courseId и сброс при смене id.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["local state","updater","component effect"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Lifecycle, cleanup и взаимодействие с Global Store",
      exercise: "Добавить инициализацию ComponentStore по courseId и сброс при смене id.",
      feature: "lifecycle cleanup i vzaimodeystvie",
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
