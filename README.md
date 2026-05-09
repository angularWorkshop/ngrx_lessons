# Добавить saveDraft effect с loading/error status и vm$ selector.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если состояние исчезает вместе с компонентом и не нужно другим маршрутам, ComponentStore часто честнее глобального store.

Visual flow:

```text
component opens
  -> local ComponentStore created
  -> updater/effect changes draft
  -> component closes and local state disappears
```

## Topic

Updaters, selectors и effects внутри ComponentStore

## Task

Добавить saveDraft effect с loading/error status и vm$ selector.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `action contract`
- `effect flow`
- `failure state`
- Add a note that mentions `NgRx` and `effect`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Updaters, selectors и effects внутри ComponentStore",
  exercise: "Добавить saveDraft effect с loading/error status и vm$ selector.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["action contract","effect flow","failure state"],
  notes: 'NgRx effect flow is completed ...',
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
