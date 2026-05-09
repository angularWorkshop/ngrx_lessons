import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("NgRx Schematics, ESLint rules и командные соглашения");
    expect(exerciseContract.exercise).toBe("Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["state boundary","typed contract","ui projection"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "NgRx Schematics, ESLint rules и командные соглашения",
      exercise: "Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.",
      feature: "ngrx schematics eslint rules i kom",
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
