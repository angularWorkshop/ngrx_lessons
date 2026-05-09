import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Выбрать первый vertical slice для миграции из service-state в NgRx.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва");
    expect(exerciseContract.exercise).toBe("Выбрать первый vertical slice для миграции из service-state в NgRx.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["state boundary","typed contract","ui projection"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва",
      exercise: "Выбрать первый vertical slice для миграции из service-state в NgRx.",
      feature: "migraciya ot servisov i behaviorsu",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["state boundary","typed contract","ui projection"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
