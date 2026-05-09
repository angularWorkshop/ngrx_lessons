# Написать migration persisted state v1 → v2 и обработать невалидный localStorage.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Сохраняй только то, что действительно нужно восстановить, и всегда думай о версии persisted state.

Visual flow:

```text
stable state shape
  -> memoized selectors
  -> minimal persistence
  -> migration when shape changes
```

## Topic

Persistence, SSR/hydration и миграции state shape

## Task

Написать migration persisted state v1 → v2 и обработать невалидный localStorage.

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
  topic: "Persistence, SSR/hydration и миграции state shape",
  exercise: "Написать migration persisted state v1 → v2 и обработать невалидный localStorage.",
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
