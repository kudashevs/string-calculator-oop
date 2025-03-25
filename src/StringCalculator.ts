export class StringCalculator {
  add(numbers: string): number {
    if (numbers.length > 0) {
      return parseInt(numbers);
    }

    return 0;
  }
}
