# Перевести CoursesState с массива на EntityAdapter.

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

EntityAdapter: ids/entities вместо ручной нормализации

## Task

Перевести CoursesState с массива на EntityAdapter.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `entity adapter`
- `ids/entities state`
- `collection selectors`
- Add a note that mentions `NgRx` and `entity`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "EntityAdapter: ids/entities вместо ручной нормализации",
  exercise: "Перевести CoursesState с массива на EntityAdapter.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["entity adapter","ids/entities state","collection selectors"],
  notes: 'NgRx entity flow is completed ...',
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
