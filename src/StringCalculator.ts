export class StringCalculator {
  add(numbers: string): number {
    // @note a wrong level of abstraction
    if (this.isEmpty(numbers)) {
      return 0;
    }

    const individualNumbers = this.parseNumbers(numbers);

    this.validate(individualNumbers);

    return this.sum(individualNumbers);
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
    numbers.forEach((n) => {
      if (n < 0) {
        throw new Error(`negatives not allowed: ${n}`);
      }
    });
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((result, n) => result + n);
  }
}
