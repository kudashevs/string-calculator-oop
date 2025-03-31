import {Limiter} from './Limiter';

export class DefaultLimiter implements Limiter {
  limit(numbers: number[]): number[] {
    return numbers.filter((n) => n <= 1000);
  }
}
