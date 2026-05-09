# Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.

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

Store как read model: компонент читает, но не управляет деталями

## Task

Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `signal state`
- `computed signal`
- `rx method`
- Add a note that mentions `NgRx` and `signalstore`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Store как read model: компонент читает, но не управляет деталями",
  exercise: "Перевести selectedCourse на signal-friendly чтение без прямого доступа к state shape.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["signal state","computed signal","rx method"],
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
