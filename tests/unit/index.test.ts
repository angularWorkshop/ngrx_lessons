import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Сделать facade bridge, где старый компонент продолжает работать, а источник данных уже переехал в Store.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва");
    expect(exerciseContract.exercise).toBe("Сделать facade bridge, где старый компонент продолжает работать, а источник данных уже переехал в Store.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["test scenario","mocked dependency","asserted contract"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва",
      exercise: "Сделать facade bridge, где старый компонент продолжает работать, а источник данных уже переехал в Store.",
      feature: "migraciya ot servisov i behaviorsu",
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
