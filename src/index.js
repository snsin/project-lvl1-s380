import readlineSync from 'readline-sync';

const nameRequest = 'May I have your name? ';
const greetitgWord = 'Hello';

const getNameAndGeeting = () => {
  const name = readlineSync.question(nameRequest);
  console.log(`${greetitgWord}, ${name}!\n`);
  return name;
};

export default getNameAndGeeting;
