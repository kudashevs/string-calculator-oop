export class StringCalculator {
  add(numbers: string): number {
    if (numbers.length > 0) {
      const individualNumbers = numbers
        .split(/[,\n]/)
        .map(n => parseInt(n));

      return individualNumbers.reduce((result, n) => result + n);
    }

    return 0;
  }
}
