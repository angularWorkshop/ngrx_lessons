# Добавить feature provider для CoursesFeature рядом с routes и проверить регистрацию state.

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

Подключение NgRx в standalone Angular-приложении

## Task

Добавить feature provider для CoursesFeature рядом с routes и проверить регистрацию state.

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
  topic: "Подключение NgRx в standalone Angular-приложении",
  exercise: "Добавить feature provider для CoursesFeature рядом с routes и проверить регистрацию state.",
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
