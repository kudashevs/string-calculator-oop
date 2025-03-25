import {StringCalculator} from '../src/StringCalculator';
import {describe, expect, it} from 'vitest';

describe('StringCalculator test suite', () => {
  const calculator = new StringCalculator();

  it('should handle an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should handle a one digit number', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('should handle a many digits number', () => {
    expect(calculator.add('42')).toBe(42);
  });
});
