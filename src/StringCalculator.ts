export class StringCalculator {
  add(numbers: string): number {
    if (numbers.length === 0) {
      return 0;
    }

    const individualNumbers = this.parseNumbers(numbers);

    return individualNumbers.reduce((result, n) => result + n);
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
}
