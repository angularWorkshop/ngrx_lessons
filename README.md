# Разложить хаотичную NgRx-фичу по понятной структуре файлов.

Starter branch for the EduTec NgRx course.

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

Feature folder structure и public API store-слоя

## Task

Разложить хаотичную NgRx-фичу по понятной структуре файлов.

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
  topic: "Feature folder structure и public API store-слоя",
  exercise: "Разложить хаотичную NgRx-фичу по понятной структуре файлов.",
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
