import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Добавить local store для exercise runner, production-safe persistence, тесты и debugging checklist.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Финальный проект: runtime прохождения курса на NgRx");
    expect(exerciseContract.exercise).toBe("Добавить local store для exercise runner, production-safe persistence, тесты и debugging checklist.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["runtime guard","debug signal","production-safe config"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Финальный проект: runtime прохождения курса на NgRx",
      exercise: "Добавить local store для exercise runner, production-safe persistence, тесты и debugging checklist.",
      feature: "finalnyy proekt runtime prohozhden",
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
