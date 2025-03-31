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
    return input.substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
