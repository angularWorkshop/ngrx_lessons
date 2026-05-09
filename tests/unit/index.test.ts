import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить sortComparer и проверить стабильный порядок карточек.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("EntityAdapter: ids/entities вместо ручной нормализации");
    expect(exerciseContract.exercise).toBe("Добавить sortComparer и проверить стабильный порядок карточек.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["entity adapter","ids/entities state","collection selectors"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "EntityAdapter: ids/entities вместо ручной нормализации",
      exercise: "Добавить sortComparer и проверить стабильный порядок карточек.",
      feature: "entityadapter ids entities vmesto",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["entity adapter","ids/entities state","collection selectors"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("entity");
  });
});
