# NgRx Exercise Standard

This repository stores EduTec NgRx course exercises.

## Branch naming

For every exercise create two branches:

- `lesson-topic-XX-exercise-YY-slug`
- `answer-topic-XX-exercise-YY-slug`

## Starter branch

- has TODO markers in `src/index.ts`
- includes runtime and type tests
- starts the StackBlitz status runner automatically
- must show `ASSIGNMENT STATUS: NOT COMPLETED` until the student finishes the task

## Answer branch

- resolves all TODOs
- keeps the same tests as starter branch
- must show `ASSIGNMENT STATUS: COMPLETED`

## Required checks

`npm run check` must pass in every answer branch.
