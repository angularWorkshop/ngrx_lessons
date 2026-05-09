# Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.

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

Cache invalidation и refresh policy

## Task

Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `request status`
- `cache policy`
- `rollback path`
- Add a note that mentions `NgRx` and `cache`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Cache invalidation и refresh policy",
  exercise: "Реализовать forced refresh, который обновляет данные и не очищает экран в пустоту.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["request status","cache policy","rollback path"],
  notes: 'NgRx cache flow is completed ...',
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
