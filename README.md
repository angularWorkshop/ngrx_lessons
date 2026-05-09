# Переписать хаотичный service-state в понятную модель loading/error/empty/success.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Проверяй себя вопросом: кто должен помнить это значение, если компонент уничтожится и появится снова?

Visual flow:

```text
screen concern
  -> local state / shared state / server state / URL state
  -> only shared domain state goes to NgRx
```

## Topic

State в Angular: local, shared, server и URL-state

## Task

Переписать хаотичный service-state в понятную модель loading/error/empty/success.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `route state`
- `router selector`
- `url-driven view`
- Add a note that mentions `NgRx` and `state`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "State в Angular: local, shared, server и URL-state",
  exercise: "Переписать хаотичный service-state в понятную модель loading/error/empty/success.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["route state","router selector","url-driven view"],
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
