import {SmartString} from './internal';

export class StringCalculator {
  add(numbers: string): number {
    const actor = SmartString.from(numbers);

    return actor.sum();
  }
}
