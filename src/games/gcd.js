import { play } from '..';
import { intGenerator, gcd } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const moveGenerator = () => {
  const a = intGenerator();
  const b = intGenerator();
  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;
  return { question, answer };
};

export default () => play(description, moveGenerator);
