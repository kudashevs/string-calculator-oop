import {Extractor} from './Extractor';

export class DefaultExtractor implements Extractor {
  extract(input: string): number[] {
    if (this.isEmpty(input)) {
      return [];
    }

    let delimiters: string = '[,\n]';
    let rest = input;
    if (input.startsWith('//')) {
      const parts = input.split('\n');
      delimiters = this.prepareDelimiters(parts[0]);
      rest = parts[1];
    }

    return rest
      .split(new RegExp(delimiters))
      .map(n => parseInt(n));
  }

  private isEmpty(input: string) {
    return input.length === 0;
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
