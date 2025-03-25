import {StringCalculator} from '../src/StringCalculator';
import {describe, expect, it} from 'vitest';

describe('StringCalculator test suite', () => {
  const calculator = new StringCalculator();

  it('should handle an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });
});
