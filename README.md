# Разделить actions страницы и actions API-слоя, сохранив читаемый flow.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Название action должно помогать читать DevTools как историю пользователя, а не как список технических команд.

Visual flow:

```text
user clicks "Refresh"
  -> [Courses Page] Refresh Clicked
  -> effect calls API
  -> [Courses API] Refresh Success / Failure
```

## Topic

Action naming: события, команды и результаты API

## Task

Разделить actions страницы и actions API-слоя, сохранив читаемый flow.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `event action`
- `pure reducer`
- `immutable state update`
- Add a note that mentions `NgRx` and `action`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Action naming: события, команды и результаты API",
  exercise: "Разделить actions страницы и actions API-слоя, сохранив читаемый flow.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["event action","pure reducer","immutable state update"],
  notes: 'NgRx action flow is completed ...',
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
