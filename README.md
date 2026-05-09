# Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если после сборки проекта ты можешь пройти flow от клика до UI-изменения по файлам без прыжков и догадок — архитектура получилась здоровой.

Visual flow:

```text
user flow
  -> global store for shared domain data
  -> local store for temporary editor state
  -> tests prove the full contract
```

## Topic

Форма feature-state: что хранить, а что вычислять

## Task

Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.

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
  topic: "Форма feature-state: что хранить, а что вычислять",
  exercise: "Спроектировать CoursesState для списка курсов, фильтра и выбранного курса.",
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
