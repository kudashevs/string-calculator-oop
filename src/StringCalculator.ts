export class StringCalculator {
  static readonly VALIDATION_MESSAGE = 'negatives not allowed';

  add(numbers: string): number {
    // @note a wrong level of abstraction
    if (this.isEmpty(numbers)) {
      return 0;
    }

    const individualNumbers = this.parseNumbers(numbers);

    this.validate(individualNumbers);

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
      delimiters = parts[0].substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      rest = parts[1];
    }

    return rest
      .split(new RegExp(delimiters))
      .map(n => parseInt(n));
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
