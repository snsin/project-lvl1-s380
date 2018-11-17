import { play } from '..';
import intGenerator from '../utils';

const description = 'What number is missing in the progression?\n';

const sequenceGenerator = (itemsCount = 10, maxDifrence = 10) => {
  const initialTerm = intGenerator();
  const commonDifference = intGenerator(maxDifrence);
  const sequence = [initialTerm];
  for (let i = 1; i < itemsCount; i += 1) {
    sequence.push(initialTerm + i * commonDifference);
  }
  return sequence;
};

const moveGenerator = () => {
  const sequence = sequenceGenerator();
  const hiddenElemetIndex = intGenerator(sequence.length);

  const question = sequence.map((item, index) => (index === hiddenElemetIndex ? '..' : item))
    .join(' ');
  const answer = `${sequence[hiddenElemetIndex]}`;
  return { question, answer };
};

export default () => play(description, moveGenerator);
