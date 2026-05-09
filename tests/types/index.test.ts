import { expectTypeOf } from 'vitest';
import { courseName, exerciseCount } from '../../src/index';

describe('baseline types', () => {
  it('keeps metadata typed', () => {
    expectTypeOf(courseName).toEqualTypeOf<string>();
    expectTypeOf(exerciseCount).toEqualTypeOf<number>();
  });
});
