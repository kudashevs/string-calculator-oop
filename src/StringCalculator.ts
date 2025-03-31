import {Extractor} from './Extractors/Extractor';
import {DefaultExtractor} from './Extractors/DefaultExtractor';
import {Validator} from './Validators/Validator';
import {DefaultValidator} from './Validators/DefaultValidator';

export class StringCalculator {
  private extractor: Extractor;
  private validator: Validator;

  constructor(extractor?: Extractor, validator?: Validator) {
    this.extractor = extractor ?? new DefaultExtractor();
    this.validator = validator ?? new DefaultValidator();
  }

  add(numbers: string): number {
    const individualNumbers = this.extractor.extract(numbers);

    this.validator.validate(individualNumbers);

    return this.sum(individualNumbers);
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((result, n) => result + n, 0);
  }
}
