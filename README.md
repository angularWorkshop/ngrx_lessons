# Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Production-safe store — это store, который можно диагностировать, но который не тащит в прод тяжёлые инструменты без нужды.

Visual flow:

```text
DevTools action log
  -> find duplicate or missing event
  -> inspect state diff
  -> fix the real flow, not the symptom
```

## Topic

Подключение NgRx в standalone Angular-приложении

## Task

Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `runtime guard`
- `debug signal`
- `production-safe config`
- Add a note that mentions `NgRx` and `state`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Подключение NgRx в standalone Angular-приложении",
  exercise: "Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["runtime guard","debug signal","production-safe config"],
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
