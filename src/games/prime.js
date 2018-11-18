import { play } from '..';
import intGenerator from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const stopValue = 1 + Math.floor(Math.sqrt(n));
  const iter = (divisor) => {
    if (divisor >= stopValue) {
      return true;
    }
    if (n % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const moveGenerator = () => {
  const question = intGenerator(200);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => play(description, moveGenerator);
