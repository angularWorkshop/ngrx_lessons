# Добавить conflict action, если сервер вернул более свежую версию progress.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Экран должен честно отвечать: мы грузим впервые, показываем старые данные и обновляемся в фоне, упали с ошибкой или уже успешно синхронизированы.

Visual flow:

```text
idle
  -> loading
  -> success(data) / empty / error(message)
  -> refresh keeps previous data when needed
```

## Topic

Optimistic update, rollback и conflict handling

## Task

Добавить conflict action, если сервер вернул более свежую версию progress.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `event action`
- `pure reducer`
- `immutable state update`
- Add a note that mentions `NgRx` and `action`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Optimistic update, rollback и conflict handling",
  exercise: "Добавить conflict action, если сервер вернул более свежую версию progress.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["event action","pure reducer","immutable state update"],
  notes: 'NgRx action flow is completed ...',
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
