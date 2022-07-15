import readlineSync from 'readline-sync';

const launchGames = (_rule, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(_rule);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameAnswer] = questionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const UserAnswer = readlineSync.question('You answer: ');
    if (gameAnswer === UserAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}" \nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulate, ${name}`);
};
export default launchGames;
