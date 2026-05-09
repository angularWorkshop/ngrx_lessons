# Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.

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

Runtime checks, serializability и meta-reducers на старте

## Task

Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `event action`
- `pure reducer`
- `immutable state update`
- Add a note that mentions `NgRx` and `reducer`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Runtime checks, serializability и meta-reducers на старте",
  exercise: "Включить runtime checks и исправить state/action, где лежит несерилизируемое значение.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["event action","pure reducer","immutable state update"],
  notes: 'NgRx reducer flow is completed ...',
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
