export class StringCalculator {
  private delimiters: string;
  private numbers: number[];

  add(numbers: string): number {
    // @note a wrong level of abstraction
    if (this.isEmpty(numbers)) {
      return 0;
    }

    // @note hard to follow, debug and control the result
    this.parseInput(numbers);

    // @note the source of data and operations on it are not very obvious
    return this.sum();
  }

  private isEmpty(input: string) {
    return input.length === 0;
  }

  private parseInput(input: string): void {
    if (input.startsWith('//')) {
      const parts = input.split('\n');

      this.delimiters = this.prepareDelimiters(parts[0]);
      this.numbers = this.prepareNumbers(parts[1]);
    } else {
      this.delimiters = '[,\n]';
      this.numbers = this.prepareNumbers(input);
    }
  }

  private prepareDelimiters(input: string): string {
    let delimiters = input.substring(2);

    if (delimiters.startsWith('[')) {
      delimiters = delimiters.substring(1, delimiters.length - 1);
    }

    return delimiters.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private prepareNumbers(input: string): number[] {
    return input
      .split(new RegExp(this.delimiters))
      .map(n => parseInt(n));
  }

  // @note the method has too many responsibilities
  private sum(): number {
    // @note the validation behavior is hidden
    this.validate(this.numbers);

    // @note the filtering behavior is hidden
    const filtered = this.filterNumbers();

    return filtered.reduce((result, n) => result + n);
  }

  private validate(numbers: number[]): void {
    const invalidNumbers: number[] = numbers.filter((n) => n < 0);

    if (invalidNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${invalidNumbers.join(',')}`);
    }
  }

  private filterNumbers() {
    return this.numbers.filter((n) => n <= 1000);
  }
}
