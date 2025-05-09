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

  it('should handle a two numbers string', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('should handle a multiple numbers string', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });

  it('should handle a new line as a separator', () => {
    expect(calculator.add('1\n2')).toBe(3);
  });

  it('should handle both separators', () => {
    expect(calculator.add('1,2\n3')).toBe(6);
  });

  it('should support a custom delimiter', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
});
