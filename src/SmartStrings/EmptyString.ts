import {SmartString} from './../internal';

export class EmptyString extends SmartString {
  parse(): number[] {
    return [];
  }

  validate(): void {
    return;
  }
}
