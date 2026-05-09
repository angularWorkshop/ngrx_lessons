import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Исправить facade, которая скрывает слишком много разной логики и стала god-service.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Facade pattern: удобный слой для компонентов или лишняя обёртка?");
    expect(exerciseContract.exercise).toBe("Исправить facade, которая скрывает слишком много разной логики и стала god-service.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["test scenario","mocked dependency","asserted contract"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Facade pattern: удобный слой для компонентов или лишняя обёртка?",
      exercise: "Исправить facade, которая скрывает слишком много разной логики и стала god-service.",
      feature: "facade pattern udobnyy sloy dlya k",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["test scenario","mocked dependency","asserted contract"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
