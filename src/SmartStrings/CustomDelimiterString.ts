import {SmartString} from './../internal';

export class CustomDelimiterString extends SmartString {
  parse(): number[] {
    const parts = this.input.split('\n');
    const delimiter = this.prepareDelimiters(parts[0]);
    const input = parts[1];

    const numbers = input
      .split(new RegExp(delimiter))
      .map(n => parseInt(n));

    this.validate(numbers);

    return numbers;
  }

  private prepareDelimiters(input: string): string {
    let delimiters = input.substring(2);

    if (delimiters.startsWith('[')) {
      delimiters = delimiters.substring(1, delimiters.length - 1);
    }

    return delimiters
      .split('][')
      .map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
  }
}
