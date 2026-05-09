import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Реализовать локальный editor store с optimistic save, rollback и dirty-state.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Проект: управление уроками курса с локальным editor-state");
    expect(exerciseContract.exercise).toBe("Реализовать локальный editor store с optimistic save, rollback и dirty-state.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["request status","cache policy","rollback path"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Проект: управление уроками курса с локальным editor-state",
      exercise: "Реализовать локальный editor store с optimistic save, rollback и dirty-state.",
      feature: "proekt upravlenie urokami kursa s",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["request status","cache policy","rollback path"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
