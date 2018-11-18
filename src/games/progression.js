import { play } from '..';
import intGenerator from '../utils';

const description = 'What number is missing in the progression?';
const defaultItemsCount = 10;

const sequenceGenerator = (itemsCount = 10, commonDifference = 10, initialTerm = 1) => {
  const sequence = [];
  for (let i = 0; i < itemsCount; i += 1) {
    sequence.push(initialTerm + i * commonDifference);
  }
  return sequence;
};

const moveGenerator = () => {
  const difference = intGenerator(10);
  const firstTerm = intGenerator(100);
  const sequence = sequenceGenerator(defaultItemsCount, difference, firstTerm);
  const hiddenElemetIndex = intGenerator(sequence.length);

  const question = sequence.map((item, index) => (index === hiddenElemetIndex ? '..' : item))
    .join(' ');
  const answer = `${sequence[hiddenElemetIndex]}`;
  return { question, answer };
};

export default () => play(description, moveGenerator);
