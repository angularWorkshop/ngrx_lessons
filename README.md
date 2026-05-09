# Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Оператор RxJS выбирается не по вкусу, а по поведению: отменять старое, ставить в очередь, запускать параллельно или игнорировать повтор.

Visual flow:

```text
action stream
  -> ofType(...)
  -> RxJS operator
  -> API / external side effect
  -> success or failure action
```

## Topic

NgRx как event-driven модель: action → reducer → selector → view

## Task

Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.

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
  topic: "NgRx как event-driven модель: action → reducer → selector → view",
  exercise: "Собрать схему flow для открытия упражнения: click → action → effect → API → success action → reducer → selector.",
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
