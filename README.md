# Заменить набор boolean-флагов на discriminated union request state.

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

Request state: loading/error/empty/success без булевой каши

## Task

Заменить набор boolean-флагов на discriminated union request state.

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
  topic: "Request state: loading/error/empty/success без булевой каши",
  exercise: "Заменить набор boolean-флагов на discriminated union request state.",
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
