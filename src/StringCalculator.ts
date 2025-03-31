import {Extractor} from './Extractors/Extractor';
import {DefaultExtractor} from './Extractors/DefaultExtractor';

export class StringCalculator {
  private extractor: Extractor;

  constructor(extractor?: Extractor) {
    this.extractor = extractor ?? new DefaultExtractor();
  }

  add(numbers: string): number {
    const individualNumbers = this.extractor.extract(numbers);

    return this.sum(individualNumbers);
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((result, n) => result + n, 0);
  }
}
