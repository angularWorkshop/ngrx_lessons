# Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Сигнал не отменяет архитектуру. Всё равно нужны границы state, понятные methods, derived state и аккуратный async-flow.

Visual flow:

```text
withState
  -> withComputed derived values
  -> withMethods user actions
  -> rxMethod async bridge
```

## Topic

RxJS interop: rxMethod, async flow и события SignalStore

## Task

Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `action contract`
- `effect flow`
- `failure state`
- Add a note that mentions `NgRx` and `signalstore`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "RxJS interop: rxMethod, async flow и события SignalStore",
  exercise: "Реализовать rxMethod загрузки курсов в SignalStore с обработкой ошибок.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["action contract","effect flow","failure state"],
  notes: 'NgRx signalstore flow is completed ...',
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
