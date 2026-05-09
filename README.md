# Настроить devtools так, чтобы production-сборка не тащила лишнюю диагностику.

Starter branch for the EduTec NgRx course.

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

Store DevTools: time travel, action log и диагностика flow

## Task

Настроить devtools так, чтобы production-сборка не тащила лишнюю диагностику.

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
  topic: "Store DevTools: time travel, action log и диагностика flow",
  exercise: "Настроить devtools так, чтобы production-сборка не тащила лишнюю диагностику.",
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
