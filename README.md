# Исправить selector, который каждый раз создаёт новый массив и ломает memoization.

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

Performance: memoization, selector granularity и change detection

## Task

Исправить selector, который каждый раз создаёт новый массив и ломает memoization.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `source selector`
- `derived selector`
- `view model`
- Add a note that mentions `NgRx` and `selector`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Performance: memoization, selector granularity и change detection",
  exercise: "Исправить selector, который каждый раз создаёт новый массив и ломает memoization.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["source selector","derived selector","view model"],
  notes: 'NgRx selector flow is completed ...',
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
