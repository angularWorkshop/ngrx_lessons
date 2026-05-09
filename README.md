# Собрать selectors поверх EntityAdapter для списка карточек и selected course.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

EntityAdapter не обязан быть везде. Но если ты постоянно пишешь map/filter/find для обновления одного элемента — это уже сигнал.

Visual flow:

```text
Course[]
  -> ids: ['ngrx', 'signals']
  -> entities: { ngrx: Course, signals: Course }
  -> selectors rebuild the visible list
```

## Topic

Entity selectors и view models для коллекций

## Task

Собрать selectors поверх EntityAdapter для списка карточек и selected course.

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
  topic: "Entity selectors и view models для коллекций",
  exercise: "Собрать selectors поверх EntityAdapter для списка карточек и selected course.",
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
