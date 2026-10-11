# Написать meta-reducer для audit-log действий без изменения feature reducers.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

В Store должны попадать serializable данные, а не Date, DOM-события, class instances или функции.

Visual flow:

```text
action/state value
  -> runtime checks inspect it
  -> unsafe mutation or non-serializable data fails early
  -> fix the model before it reaches production
```

## Topic

Runtime checks, serializability и meta-reducers на старте

## Task

Написать meta-reducer для audit-log действий без изменения feature reducers.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `serializable state`
- `runtime guard`
- `audit meta-reducer`
- Add a note that mentions `NgRx` and `runtime`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Runtime checks, serializability и meta-reducers на старте",
  exercise: "Написать meta-reducer для audit-log действий без изменения feature reducers.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["serializable state","runtime guard","audit meta-reducer"],
  notes: 'NgRx runtime flow is completed ...',
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
