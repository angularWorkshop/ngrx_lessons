import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Переписать хаотичный service-state в понятную модель loading/error/empty/success.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("State в Angular: local, shared, server и URL-state");
    expect(exerciseContract.exercise).toBe("Переписать хаотичный service-state в понятную модель loading/error/empty/success.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["route state","router selector","url-driven view"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "State в Angular: local, shared, server и URL-state",
      exercise: "Переписать хаотичный service-state в понятную модель loading/error/empty/success.",
      feature: "state v angular local shared serve",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["route state","router selector","url-driven view"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("state");
  });
});
