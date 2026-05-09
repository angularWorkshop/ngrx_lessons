# Упростить selector soup, разбив selectors на source, derived и vm levels.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Если в компоненте появляется несколько select подряд и ручная сборка объекта — просится один view-model selector.

Visual flow:

```text
raw store state
  -> source selectors
  -> derived selectors
  -> one VM selector for the component
```

## Topic

Anti-patterns NgRx: Store как база данных, action explosion и selector soup

## Task

Упростить selector soup, разбив selectors на source, derived и vm levels.

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
  topic: "Anti-patterns NgRx: Store как база данных, action explosion и selector soup",
  exercise: "Упростить selector soup, разбив selectors на source, derived и vm levels.",
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
