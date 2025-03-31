import {Validator} from './Validator';

export class DefaultValidator implements Validator {
  validate(numbers: number[]): void {
    numbers.forEach((n) => {
      const invalidNumbers: number[] = numbers.filter((n) => n < 0);

      if (invalidNumbers.length > 0) {
        throw new Error(`negatives not allowed: ${invalidNumbers.join(',')}`);
      }
    });
  }
}
