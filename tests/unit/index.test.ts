import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Ошибки, retry, cancellation и concatLatestFrom");
    expect(exerciseContract.exercise).toBe("Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Ошибки, retry, cancellation и concatLatestFrom",
      exercise: "Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.",
      feature: "oshibki retry cancellation i conca",
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
    expect(result.notes.toLowerCase()).toContain("test");
  });
});
