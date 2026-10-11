# Подключить CoursesPage к Store через готовый vm$ stream и async pipe.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Компонент должен читать готовую модель экрана, а не обходить внутренности state shape.

Visual flow:

```text
store state
  -> prepared vm$ or selectSignal
  -> async pipe / signal read
  -> thin component template
```

## Topic

Store как read model: компонент читает, но не управляет деталями

## Task

Подключить CoursesPage к Store через готовый vm$ stream и async pipe.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `vm stream`
- `async pipe read`
- `thin component`
- Add a note that mentions `NgRx` and `read model`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Store как read model: компонент читает, но не управляет деталями",
  exercise: "Подключить CoursesPage к Store через готовый vm$ stream и async pipe.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["vm stream","async pipe read","thin component"],
  notes: 'NgRx read model flow is completed ...',
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
