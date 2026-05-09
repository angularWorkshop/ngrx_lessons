# Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.

Starter branch for the EduTec NgRx course.

## Why this exercise exists

Название action должно помогать читать DevTools как историю пользователя, а не как список технических команд.

Visual flow:

```text
user clicks "Refresh"
  -> [Courses Page] Refresh Clicked
  -> effect calls API
  -> [Courses API] Refresh Success / Failure
```

## Topic

NgRx Schematics, ESLint rules и командные соглашения

## Task

Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.

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
  topic: "NgRx Schematics, ESLint rules и командные соглашения",
  exercise: "Сгенерировать feature-store через schematics и вручную привести его к принятой структуре курса.",
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
