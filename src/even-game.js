import readlineSync from 'readline-sync';
import getNameAndGreeting from './index';

const WELLCOME_LINE = 'Wellcome to Brain Games';
const RULES = 'Answer "yes" if number even otherwise answer "no".\n';
const QUESTION_PROMT = 'Question: ';
const ANSWER_PROMT = 'Answer: ';
const YES = 'yes';
const NO = 'no';
const CORRECT = 'Correct!';
const CONGRAT = 'Congratulations, ';
const FAIL = 'Let\'s try again, ';
const WRONG_ANS_PATTERN = ' is wrong answer ;(. Correct answer was ';
const MAX_NUMBER = 100;
const CORRECT_ANSWER_COUNT_TO_WIN = 3;

const stringToBoolSelector = {
  [YES]: true,
  [NO]: false,
};

const intGenerator = () => Math.floor(Math.random() * MAX_NUMBER);
const answerToBool = answer => stringToBoolSelector[answer];
const isEven = number => number % 2 === 0;
const getActualAnswer = boolAnsw => Object.keys(stringToBoolSelector)
  .reduce((acc, elem) => (boolAnsw === answerToBool(elem) ? `${elem}` : acc), '');


const play = () => {
  console.log(WELLCOME_LINE);
  console.log(RULES);
  const playerName = getNameAndGreeting();

  let message = CONGRAT;
  for (let i = 0; i < CORRECT_ANSWER_COUNT_TO_WIN; i += 1) {
    const number = intGenerator();
    const numberParity = isEven(number);

    const answer = readlineSync
      .question(`${QUESTION_PROMT}${number}\n${ANSWER_PROMT}`);

    const actualAnswerString = getActualAnswer(numberParity);

    if (answerToBool(answer) === numberParity) {
      console.log(CORRECT);
    } else {
      console.log(`'${answer}'${WRONG_ANS_PATTERN}'${actualAnswerString}'.`);
      message = FAIL;
      break;
    }
  }
  console.log(`${message}${playerName}!`);
};

export default play;
