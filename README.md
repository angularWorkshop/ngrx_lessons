# Поймать type-error в reducer, где action payload не совпадает с state model.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Reducer должен быть скучным, предсказуемым и проверяемым обычным unit-тестом.

Visual flow:

```text
previous state + action
  -> pure calculation
  -> new state object
  -> selectors recalculate only what changed
```

## Topic

Typed payloads и защита от action-shape ошибок

## Task

Поймать type-error в reducer, где action payload не совпадает с state model.

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
  topic: "Typed payloads и защита от action-shape ошибок",
  exercise: "Поймать type-error в reducer, где action payload не совпадает с state model.",
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
