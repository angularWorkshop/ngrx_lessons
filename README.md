# Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Если после сборки проекта ты можешь пройти flow от клика до UI-изменения по файлам без прыжков и догадок — архитектура получилась здоровой.

Visual flow:

```text
user flow
  -> global store for shared domain data
  -> local store for temporary editor state
  -> tests prove the full contract
```

## Topic

Проект: список курсов, фильтр, выбранная карточка и загрузка деталей

## Task

Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `action contract`
- `effect flow`
- `failure state`
- Add a note that mentions `NgRx` and `effect`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Проект: список курсов, фильтр, выбранная карточка и загрузка деталей",
  exercise: "Подключить effects загрузки списка и деталей, покрыть flow unit-тестами.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["action contract","effect flow","failure state"],
  notes: 'NgRx effect flow is completed ...',
};
```

## Quick self-check

- `createNgrxExercisePlan()` should stay as the draft plan.
- `completeNgrxExercise()` should describe the completed solution.
- The order of `implementedArtifacts` matters because tests compare it exactly.
- Do not add `any`; the type test expects a strict `NgrxExerciseResult`.

## Checks

`npm run check` runs TypeScript and Vitest checks.

Expected result for a completed solution: `ASSIGNMENT STATUS: COMPLETED`.
