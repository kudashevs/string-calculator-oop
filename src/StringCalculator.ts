export class StringCalculator {
  private delimiters: string;
  private numbers: number[];

  add(numbers: string): number {
    // wrong abstraction level
    if (this.isEmpty(numbers)) {
      return 0;
    }

    // hard to control the result and debug
    this.parseInput(numbers);

    // the source of data is not very obvious
    return this.sum();
  }

  private isEmpty(input: string) {
    return input.length === 0;
  }

  private parseInput(input: string): void {
    if (input.startsWith('//')) {
      const parts = input.split('\n');

      this.delimiters = parts[0].substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      this.numbers = this.prepareNumbers(parts[1]);
    } else {
      this.delimiters = '[,\n]';
      this.numbers = this.prepareNumbers(input);
    }
  }

  private prepareNumbers(input: string): number[] {
    return input
      .split(new RegExp(this.delimiters))
      .map(n => parseInt(n));
  }

  private sum(): number {
    this.validate(this.numbers);

    return this.numbers.reduce((result, n) => result + n);
  }

  private validate(numbers: number[]): void {
    numbers.forEach((n) => {
      if (n < 0) {
        throw new Error(`negatives not allowed: ${n}`);
      }
    });
  }
}
