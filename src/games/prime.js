import { play } from '..';
import { gcd, intGenerator } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  const iter = (divisor, stopVal) => {
    if (divisor >= stopVal) {
      return true;
    }
    if (gcd(n, divisor) !== 1) {
      return false;
    }
    return iter(divisor + 1, stopVal);
  };
  if (n < 2) {
    return false;
  }
  const stopValue = 1 + Math.floor(Math.sqrt(n));
  return iter(2, stopValue);
};

const moveGenerator = () => {
  const question = intGenerator(200);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => play(description, moveGenerator);
