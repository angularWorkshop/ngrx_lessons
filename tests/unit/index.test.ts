import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("По action log найти причину двойной загрузки списка.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Store DevTools: time travel, action log и диагностика flow");
    expect(exerciseContract.exercise).toBe("По action log найти причину двойной загрузки списка.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["event action","pure reducer","immutable state update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Store DevTools: time travel, action log и диагностика flow",
      exercise: "По action log найти причину двойной загрузки списка.",
      feature: "store devtools time travel action",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["event action","pure reducer","immutable state update"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("action");
  });
});
