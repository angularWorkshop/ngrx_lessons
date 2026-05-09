import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Подключить router-store и selector для courseId из route params.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Router Store: URL как часть состояния приложения");
    expect(exerciseContract.exercise).toBe("Подключить router-store и selector для courseId из route params.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["source selector","derived selector","view model"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Router Store: URL как часть состояния приложения",
      exercise: "Подключить router-store и selector для courseId из route params.",
      feature: "router store url kak chast sostoya",
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
