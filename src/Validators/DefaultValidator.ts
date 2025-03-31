import {Validator} from './Validator';

export class DefaultValidator implements Validator {
  static readonly VALIDATION_MESSAGE = 'negatives not allowed';

  validate(numbers: number[]): void {
    numbers.forEach((n) => {
      const invalidNumbers: number[] = numbers.filter((n) => n < 0);

      if (invalidNumbers.length > 0) {
        throw new Error(DefaultValidator.VALIDATION_MESSAGE + ': ' + invalidNumbers.join(','));
      }
    });
  }
}
