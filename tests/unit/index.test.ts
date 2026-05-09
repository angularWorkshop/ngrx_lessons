import { describe, expect, it } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, exerciseContract } from '../../src/index';

describe("Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.", () => {
  it('keeps the NgRx exercise contract explicit', () => {
    expect(exerciseContract.course).toBe('NGRX');
    expect(exerciseContract.topic).toBe("Проект: список курсов, фильтр, выбранная карточка и загрузка деталей");
    expect(exerciseContract.exercise).toBe("Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.");
    expect([...exerciseContract.requiredArtifacts]).toEqual(["action contract","effect flow","failure state"]);
  });

  it('starts from a draft plan before implementation', () => {
    expect(createNgrxExercisePlan()).toEqual({
      course: 'NGRX',
      topic: "Проект: список курсов, фильтр, выбранная карточка и загрузка деталей",
      exercise: "Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.",
      feature: "proekt spisok kursov filtr vybrann",
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
