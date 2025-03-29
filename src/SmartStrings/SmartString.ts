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

  sum(): number {
    const numbers = this.parse();

    return numbers.reduce((acc, n) => acc + n, 0);
  };

  abstract parse(): number[];
}
