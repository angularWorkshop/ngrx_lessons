# Переписать хаотичный service-state в понятную модель loading/error/empty/success.

Answer branch for the EduTec NgRx course.

## Why this exercise exists

Если несколько флагов могут противоречить друг другу, собери их в один явный status.

Visual flow:

```text
request starts
  -> status: 'loading'
  -> status: 'success' | 'empty' | 'error'
  -> UI renders one clear branch
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
- `request status model`
- `empty/error branch`
- `success branch`
- Add a note that mentions `NgRx` and `request`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "State в Angular: local, shared, server и URL-state",
  exercise: "Переписать хаотичный service-state в понятную модель loading/error/empty/success.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["request status model","empty/error branch","success branch"],
  notes: 'NgRx request flow is completed ...',
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
