import { play } from '..';

const description = 'What is the result of the expression?\n';
const maxNumber = 100;

const intGenerator = () => Math.floor(Math.random() * maxNumber);
const calculations = [
  {
    symbol: '*',
    operation: (n1, n2) => n1 * n2,
  },
  {
    symbol: '+',
    operation: (n1, n2) => n1 + n2,
  },
  {
    symbol: '-',
    operation: (n1, n2) => n1 - n2,
  },
];

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const moveGenerator = () => {
  const calc = getRandomElement(calculations);
  const num1 = intGenerator();
  const num2 = intGenerator();
  const question = `${num1} ${calc.symbol} ${num2}`;
  const answer = `${calc.operation(num1, num2)}`;
  return { question, answer };
};

export default () => play({ description, moveGenerator });
