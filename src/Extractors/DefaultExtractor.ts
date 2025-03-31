import {Extractor} from './Extractor';

export class DefaultExtractor implements Extractor {
  extract(input: string): number[] {
    if (input.length === 0) {
      return [];
    }

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
