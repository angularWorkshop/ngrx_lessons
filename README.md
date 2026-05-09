# Собрать selectCoursesPageVm с состояниями loading/error/empty/success.

Starter branch for the EduTec NgRx course.

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

ViewModel selector: один поток данных для компонента

## Task

Собрать selectCoursesPageVm с состояниями loading/error/empty/success.

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
  topic: "ViewModel selector: один поток данных для компонента",
  exercise: "Собрать selectCoursesPageVm с состояниями loading/error/empty/success.",
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
