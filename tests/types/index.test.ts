import { expectTypeOf } from 'vitest';
import { completeNgrxExercise, createNgrxExercisePlan, type NgrxExerciseResult } from '../../src/index';

describe('NgRx exercise types', () => {
  it('keeps both functions typed as the same result contract', () => {
    expectTypeOf(createNgrxExercisePlan()).toEqualTypeOf<NgrxExerciseResult>();
    expectTypeOf(completeNgrxExercise()).toEqualTypeOf<NgrxExerciseResult>();
  });
});
