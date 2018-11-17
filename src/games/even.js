import { play } from '..';
import { intGenerator } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => number % 2 === 0;

const moveGenerator = () => {
  const question = intGenerator();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => play(description, moveGenerator);
