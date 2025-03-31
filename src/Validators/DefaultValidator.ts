import {Validator} from './Validator';

export class DefaultValidator implements Validator {
  validate(numbers: number[]): void {
    numbers.forEach((n) => {
      if (n < 0) {
        throw new Error(`negatives not allowed: ${n}`);
      }
    });
  }
}
