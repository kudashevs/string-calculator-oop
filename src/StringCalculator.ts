export class StringCalculator {
  private delimiters: string;
  private numbers: number[];

  add(numbers: string): number {
    if (numbers.length === 0) {
      return 0;
    }

    this.parseInput(numbers);

    return this.numbers.reduce((result, n) => result + n);
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
}
