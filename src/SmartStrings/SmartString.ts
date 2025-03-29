import {CustomDelimiterString, DefaultDelimiterString, EmptyString} from './../internal';

export abstract class SmartString {
  protected readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  public static from(input: string): SmartString {
    switch (true) {
      case input === '':
        return new EmptyString(input);

      case input.startsWith('//'):
        return new CustomDelimiterString(input);

      default:
        return new DefaultDelimiterString(input);
    }
  }

  protected validate(numbers: number[]): void {
    numbers.forEach((n) => {
      const invalidNumbers: number[] = numbers.filter((n) => n < 0);

      if (invalidNumbers.length > 0) {
        throw new Error(`negatives not allowed: ${invalidNumbers.join(',')}`);
      }
    });
  }

  sum(): number {
    const numbers = this.parse();

    return numbers.reduce((acc, n) => acc + n, 0);
  };

  abstract parse(): number[];
}
