import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("NgRx как event-driven модель: action → reducer → selector → view");
    expect(exerciseContract.exercise).toBe("Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["user event","state transition","view update"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "NgRx как event-driven модель: action → reducer → selector → view",
      exercise: "Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.",
      feature: "ngrx kak event driven model action",
      status: 'draft',
      implementedArtifacts: [],
      notes: 'План готов: осталось реализовать контракт упражнения.',
    });
  });

  it('returns a completed implementation summary', () => {
    const result = completeNgrxExercise();

    expect(result.status).toBe('completed');
    expect(result.implementedArtifacts).toEqual(["user event","state transition","view update"]);
    expect(result.notes.toLowerCase()).toContain('ngrx');
    expect(result.notes.toLowerCase()).toContain("flow");
  });
});
