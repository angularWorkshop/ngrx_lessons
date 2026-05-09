# Выбрать первый vertical slice для миграции из service-state в NgRx.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если компонент знает слишком много о внутренней форме store, фича становится хрупкой при любом рефакторинге.

Visual flow:

```text
feature boundary
  -> public API
  -> store internals
  -> components import only the public contract
```

## Topic

Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва

## Task

Выбрать первый vertical slice для миграции из service-state в NgRx.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `state boundary`
- `typed contract`
- `ui projection`
- Add a note that mentions `NgRx` and `state`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Миграция: от сервисов и BehaviorSubject к NgRx без большого взрыва",
  exercise: "Выбрать первый vertical slice для миграции из service-state в NgRx.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["state boundary","typed contract","ui projection"],
  notes: 'NgRx state flow is completed ...',
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
