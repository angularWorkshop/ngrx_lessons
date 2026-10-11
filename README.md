# Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Храни факты, а вычисляемые значения оставляй для read-слоя.

Visual flow:

```text
raw requirements
  -> source facts in state
  -> derived data outside state
  -> component receives a clean read model
```

## Topic

Форма feature-state: что хранить, а что вычислять

## Task

Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `source state shape`
- `derived data boundary`
- `selected id`
- Add a note that mentions `NgRx` and `state`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Форма feature-state: что хранить, а что вычислять",
  exercise: "Убрать дублирующий filteredCourses из state и оставить вычисление для read-слоя.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["source state shape","derived data boundary","selected id"],
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
