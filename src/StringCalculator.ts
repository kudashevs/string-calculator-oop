import {Extractor} from './Extractors/Extractor';
import {DefaultExtractor} from './Extractors/DefaultExtractor';
import {Validator} from './Validators/Validator';
import {DefaultValidator} from './Validators/DefaultValidator';
import {Limiter} from './Limiters/Limiter';
import {DefaultLimiter} from './Limiters/DefaultLimiter';

export class StringCalculator {
  private extractor: Extractor;
  private validator: Validator;
  private limiter: Limiter;

  constructor(extractor?: Extractor, validator?: Validator, limiter?: Limiter) {
    this.extractor = extractor ?? new DefaultExtractor();
    this.validator = validator ?? new DefaultValidator();
    this.limiter = limiter ?? new DefaultLimiter();
  }

  add(numbers: string): number {
    // @note it does not reflect the empty string requirement
    const individualNumbers = this.extractor.extract(numbers);

    // @note the validation behavior is non-hidden
    this.validator.validate(individualNumbers);

    // @note the filtering behavior is non-hidden
    const filteredNumbers = this.limiter.limit(individualNumbers);

    return this.sum(filteredNumbers);
  }

  private sum(numbers: number[]): number {
    return numbers.reduce((result, n) => result + n, 0);
  }
}
