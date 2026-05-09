import { describe, expect, it } from 'vitest';
import { courseName, exerciseCount } from '../../src/index';

describe('NgRx lessons baseline', () => {
  it('keeps the course metadata', () => {
    expect(courseName).toBe('EduTec NgRx');
    expect(exerciseCount).toBe(94);
  });
});
