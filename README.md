# Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

На этапе setup проверяем wiring, а не пытаемся решать всю архитектуру фичи сразу.

Visual flow:

```text
app bootstrap
  -> provideStore(...)
  -> provide feature state near feature boundary
  -> app can read registered state
```

## Topic

Подключение NgRx в standalone Angular-приложении

## Task

Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `root store provider`
- `devtools setup`
- `runtime check boundary`
- Add a note that mentions `NgRx` and `setup`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Подключение NgRx в standalone Angular-приложении",
  exercise: "Подключить provideStore и provideStoreDevtools в стартовом Angular-приложении.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["root store provider","devtools setup","runtime check boundary"],
  notes: 'NgRx setup flow is completed ...',
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
