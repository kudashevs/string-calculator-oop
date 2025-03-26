export class StringCalculator {
  add(numbers: string): number {
    if (numbers.length === 0) {
      return 0;
    }

    let delimiter: string = '[,\n]';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      numbers = parts[1];
    }

    const individualNumbers = this.prepareNumbers(numbers, delimiter);

    return individualNumbers.reduce((result, n) => result + n);
  }

  private prepareNumbers(input: string, delimiter: string): number[] {
    return input
      .split(new RegExp(delimiter))
      .map(n => parseInt(n));
  }
}
