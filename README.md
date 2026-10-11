# Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

На раннем этапе достаточно назвать шаги flow и не пытаться сразу реализовать всю инфраструктуру.

Visual flow:

```text
user event
  -> action describes what happened
  -> state transition updates the model
  -> view reads the result
```

## Topic

NgRx как event-driven модель: action → reducer → selector → view

## Task

Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `user event`
- `state transition`
- `view update`
- Add a note that mentions `NgRx` and `flow`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "NgRx как event-driven модель: action → reducer → selector → view",
  exercise: "Исправить компонент, который напрямую мутирует список, заменив это на явное событие и чтение готовых данных.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["user event","state transition","view update"],
  notes: 'NgRx flow flow is completed ...',
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
