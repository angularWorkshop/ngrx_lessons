import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Спроектировать и реализовать Course Runtime global store: actions, reducers, selectors, entity, router-store и effects.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Финальный проект: runtime прохождения курса на NgRx");
    expect(exerciseContract.exercise).toBe("Спроектировать и реализовать Course Runtime global store: actions, reducers, selectors, entity, router-store и effects.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Финальный проект: runtime прохождения курса на NgRx",
      exercise: "Спроектировать и реализовать Course Runtime global store: actions, reducers, selectors, entity, router-store и effects.",
      feature: "finalnyy proekt runtime prohozhden",
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
    expect(result.notes.toLowerCase()).toContain("effect");
  });
});
