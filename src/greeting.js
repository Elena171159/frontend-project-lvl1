import readlineSync from 'readline-sync';

let name;

export function greeting() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
export function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export const commonAction = (_rule, questionAnswer) => {
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
