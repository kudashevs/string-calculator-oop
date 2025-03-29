import {SmartString} from './../internal';

const delimiter: string = '[,\n]';

export class DefaultDelimiterString extends SmartString {
  parse(): number[] {
    const numbers = this.input
      .split(new RegExp(delimiter))
      .map(n => parseInt(n));

    this.validate(numbers);

    return numbers;
  }
}
