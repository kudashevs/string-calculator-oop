export class StringCalculator {
  private delimiters: string;
  private numbers: number[];

  add(numbers: string): number {
    if (this.isEmpty(numbers)) {
      return 0;
    }

    this.parseInput(numbers);

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
    return this.numbers.reduce((result, n) => result + n);
  }
}
