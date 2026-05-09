# Выбрать корректный operator для submit exercise result и доказать поведение тестом.

Starter branch for the EduTec NgRx course.

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

switchMap, concatMap, mergeMap, exhaustMap без гадания

## Task

Выбрать корректный operator для submit exercise result и доказать поведение тестом.

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
  topic: "switchMap, concatMap, mergeMap, exhaustMap без гадания",
  exercise: "Выбрать корректный operator для submit exercise result и доказать поведение тестом.",
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
