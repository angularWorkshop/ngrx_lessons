import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Создать CoursesFacade для dashboard-компонента.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Facade pattern: удобный слой для компонентов или лишняя обёртка?");
    expect(exerciseContract.exercise).toBe("Создать CoursesFacade для dashboard-компонента.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["test scenario","mocked dependency","asserted contract"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Facade pattern: удобный слой для компонентов или лишняя обёртка?",
      exercise: "Создать CoursesFacade для dashboard-компонента.",
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
