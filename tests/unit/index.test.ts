import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Форма feature-state: что хранить, а что вычислять");
    expect(exerciseContract.exercise).toBe("Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["source state shape","derived data boundary","selected id"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Форма feature-state: что хранить, а что вычислять",
      exercise: "Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.",
      feature: "forma feature state chto hranit a",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["source state shape","derived data boundary","selected id"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
