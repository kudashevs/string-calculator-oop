export class StringCalculator {
  static readonly VALIDATION_MESSAGE = 'negatives not allowed';

  add(numbers: string): number {
    // @note a wrong level of abstraction
    if (this.isEmpty(numbers)) {
      return 0;
    }

    const individualNumbers = this.parseNumbers(numbers);

    // @note the validation behavior is non-hidden
    this.validate(individualNumbers);

    // @note the filtering behavior is non-hidden
    const filteredNumbers = this.filterNumbers(individualNumbers);

    return this.sum(filteredNumbers);
  }

  private isEmpty(input: string) {
    return input.length === 0;
  }

  private parseNumbers(input: string): number[] {
    let delimiters: string = '[,\n]';
    let rest = input;
    if (input.startsWith('//')) {
      const parts = input.split('\n');
      delimiters = this.prepareDelimiters(parts[0]);
      rest = parts[1];
    }

    return rest
      .split(new RegExp(delimiters))
      .map(n => parseInt(n));
  }

  private prepareDelimiters(input: string): string {
    let delimiters = input.substring(2);

    if (delimiters.startsWith('[')) {
      delimiters = delimiters.substring(1, delimiters.length - 1);
    }

    return delimiters
      .split('][')
      .map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
  }

  private validate(numbers: number[]): void {
    const invalidNumbers: number[] = numbers.filter((n) => n < 0);

    if (invalidNumbers.length > 0) {
      throw new Error(StringCalculator.VALIDATION_MESSAGE + ': ' + invalidNumbers.join(','));
    }
  }

  private filterNumbers(numbers: number[]) {
    return numbers.filter((n) => n <= 1000);
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((result, n) => result + n);
  }
}
