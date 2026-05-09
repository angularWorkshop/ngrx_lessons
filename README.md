# Исправить facade, которая скрывает слишком много разной логики и стала god-service.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Если компонент знает слишком много о внутренней форме store, фича становится хрупкой при любом рефакторинге.

Visual flow:

```text
feature boundary
  -> public API
  -> store internals
  -> components import only the public contract
```

## Topic

Facade pattern: удобный слой для компонентов или лишняя обёртка?

## Task

Исправить facade, которая скрывает слишком много разной логики и стала god-service.

## What to finish

- Open `src/index.ts`.
- Complete `completeNgrxExercise()`.
- Return `status: 'completed'`.
- Keep the expected artifacts:
- `test scenario`
- `mocked dependency`
- `asserted contract`
- Add a note that mentions `NgRx` and `state`.
- Save the file and wait for the StackBlitz status runner.

## Expected result shape

```ts
return {
  course: 'NGRX',
  topic: "Facade pattern: удобный слой для компонентов или лишняя обёртка?",
  exercise: "Исправить facade, которая скрывает слишком много разной логики и стала god-service.",
  feature: '...',
  status: 'completed',
  implementedArtifacts: ["test scenario","mocked dependency","asserted contract"],
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
