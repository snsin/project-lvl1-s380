import readlineSync from 'readline-sync';

const wellcomeLine = 'Wellcome to Brain Games!';
const correctAnswerCountToWin = 3;

const getNameAndGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const play = (description, moveGenerator) => {
  console.log(wellcomeLine);
  console.log(description);
  const playerName = getNameAndGreeting();

  let message = 'Congratulations, ';
  for (let i = 0; i < correctAnswerCountToWin; i += 1) {
    const move = moveGenerator();
    const { question, answer } = move;
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      message = 'Let\'s try again, ';
      break;
    }
  }
  console.log(`${message}${playerName}!`);
};

export default getNameAndGreeting;
