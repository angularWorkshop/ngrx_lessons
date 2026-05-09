# Написать table-driven tests для CoursesReducer.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Чем тоньше компонент и явнее selectors/effects, тем меньше дорогих интеграционных тестов нужно для уверенности.

Visual flow:

```text
given state/action
  -> run reducer / selector / effect
  -> assert the public contract, not private code
```

## Topic

Reducer и selector tests без тяжёлого Angular TestBed

## Task

Написать table-driven tests для CoursesReducer.

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
  topic: "Reducer и selector tests без тяжёлого Angular TestBed",
  exercise: "Написать table-driven tests для CoursesReducer.",
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
