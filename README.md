# Добавить clear-on-leave action для временного editor-state и сохранить cache списка курсов.

Starter branch for the EduTec NgRx course.

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

Lazy feature registration и teardown feature-state

## Task

Добавить clear-on-leave action для временного editor-state и сохранить cache списка курсов.

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
  topic: "Lazy feature registration и teardown feature-state",
  exercise: "Добавить clear-on-leave action для временного editor-state и сохранить cache списка курсов.",
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
