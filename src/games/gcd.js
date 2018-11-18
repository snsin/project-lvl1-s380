import { play } from '..';
import intGenerator from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const iter = (a, b) => {
    if (b === 0) {
      return a;
    }
    return iter(b, a % b);
  };
  return num1 > num2 ? iter(num1, num2) : iter(num2, num1);
};

const moveGenerator = () => {
  const a = intGenerator();
  const b = intGenerator();
  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;
  return { question, answer };
};

export default () => play(description, moveGenerator);
