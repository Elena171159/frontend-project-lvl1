import readlineSync from 'readline-sync';

const launchGame = (rule, generateQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const Roundcounter = 3;
  for (let i = 0; i < Roundcounter; i += 1) {
    const [gameQuestion, gameAnswer] = generateQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (gameAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}" \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default launchGame;
