# Выбрать подходящее хранилище для пяти сценариев и объяснить решение.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если состояние исчезает вместе с компонентом и не нужно другим маршрутам, ComponentStore часто честнее глобального store.

Visual flow:

```text
component opens
  -> local ComponentStore created
  -> updater/effect changes draft
  -> component closes and local state disappears
```

## Topic

Когда ComponentStore лучше Global Store

## Task

Выбрать подходящее хранилище для пяти сценариев и объяснить решение.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `local state`
- `updater`
- `component effect`
- Add a note that mentions `NgRx` and `componentstore`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Когда ComponentStore лучше Global Store",
  exercise: "Выбрать подходящее хранилище для пяти сценариев и объяснить решение.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["local state","updater","component effect"],
  notes: 'NgRx componentstore flow is completed ...',
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
