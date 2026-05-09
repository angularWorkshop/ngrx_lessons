# Подключить CoursesPage к Store через vm$ selector и async pipe.

Answer branch for the EduTec NgRx course.

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

Store как read model: компонент читает, но не управляет деталями

## Task

Подключить CoursesPage к Store через vm$ selector и async pipe.

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
  topic: "Store как read model: компонент читает, но не управляет деталями",
  exercise: "Подключить CoursesPage к Store через vm$ selector и async pipe.",
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
