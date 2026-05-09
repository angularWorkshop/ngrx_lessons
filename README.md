# Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.

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

Ошибки, retry, cancellation и concatLatestFrom

## Task

Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `action contract`
- `effect flow`
- `failure state`
- Add a note that mentions `NgRx` and `test`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Ошибки, retry, cancellation и concatLatestFrom",
  exercise: "Использовать concatLatestFrom для отправки progress с актуальным selectedCourseId.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["action contract","effect flow","failure state"],
  notes: 'NgRx test flow is completed ...',
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
