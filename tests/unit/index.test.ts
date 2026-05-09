import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("NgRx как event-driven модель: action → reducer → selector → view");
    expect(exerciseContract.exercise).toBe("Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "NgRx как event-driven модель: action → reducer → selector → view",
      exercise: "Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.",
      feature: "ngrx kak event driven model action",
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
