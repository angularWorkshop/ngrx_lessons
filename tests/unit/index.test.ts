import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Выбрать подходящее хранилище для пяти сценариев и объяснить решение.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Когда ComponentStore лучше Global Store");
    expect(exerciseContract.exercise).toBe("Выбрать подходящее хранилище для пяти сценариев и объяснить решение.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["local state","updater","component effect"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Когда ComponentStore лучше Global Store",
      exercise: "Выбрать подходящее хранилище для пяти сценариев и объяснить решение.",
      feature: "kogda componentstore luchshe globa",
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
