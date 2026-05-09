import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Написать table-driven tests для CoursesReducer.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Reducer и selector tests без тяжёлого Angular TestBed");
    expect(exerciseContract.exercise).toBe("Написать table-driven tests для CoursesReducer.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["source selector","derived selector","view model"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Reducer и selector tests без тяжёлого Angular TestBed",
      exercise: "Написать table-driven tests для CoursesReducer.",
      feature: "reducer i selector tests bez tyazh",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["source selector","derived selector","view model"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("selector");
  });
});
