# Покрыть loadCourses$ success и failure сценарии.

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

Effect tests: MockActions, service mocks и marble/fake scheduler подход

## Task

Покрыть loadCourses$ success и failure сценарии.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `action contract`
- `effect flow`
- `failure state`
- Add a note that mentions `NgRx` and `effect`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Effect tests: MockActions, service mocks и marble/fake scheduler подход",
  exercise: "Покрыть loadCourses$ success и failure сценарии.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["action contract","effect flow","failure state"],
  notes: 'NgRx effect flow is completed ...',
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
