import readlineSync from 'readline-sync';

const wellcomeLine = 'Wellcome to Brain Games!';
const correctAnswerCountToWin = 3;

const getNameAndGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const play = (game) => {
  console.log(wellcomeLine);
  console.log(game.rules);
  const playerName = getNameAndGreeting();

  let message = 'Congratulations, ';
  for (let i = 0; i < correctAnswerCountToWin; i += 1) {
    const move = game.moveGenerator();
    console.log(`Question: ${move.question}`);
    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer === move.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${move.answer}'.`);
      message = 'Let\'s try again, ';
      break;
    }
  }
  console.log(`${message}${playerName}!`);
};

export default getNameAndGreeting;
