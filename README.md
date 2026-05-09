# Перенести filter query param в URL и синхронизировать список через selector.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если значение должно пережить reload страницы и быть доступным по ссылке — сначала посмотри в сторону route/query params.

Visual flow:

```text
/courses/ngrx?tab=lessons
  -> selectRouteParam('courseId')
  -> selectQueryParam('tab')
  -> selectCoursePageVm
```

## Topic

Router Store: URL как часть состояния приложения

## Task

Перенести filter query param в URL и синхронизировать список через selector.

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
  topic: "Router Store: URL как часть состояния приложения",
  exercise: "Перенести filter query param в URL и синхронизировать список через selector.",
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
