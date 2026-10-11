import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Подключить CoursesPage к Store через готовый vm$ stream и async pipe.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Store как read model: компонент читает, но не управляет деталями");
    expect(exerciseContract.exercise).toBe("Подключить CoursesPage к Store через готовый vm$ stream и async pipe.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["vm stream","async pipe read","thin component"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Store как read model: компонент читает, но не управляет деталями",
      exercise: "Подключить CoursesPage к Store через готовый vm$ stream и async pipe.",
      feature: "store kak read model komponent chi",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["vm stream","async pipe read","thin component"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("read model");
  });
});
