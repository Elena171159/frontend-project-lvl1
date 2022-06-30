import readlineSync from 'readline-sync';

let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-expressions
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

function even(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
export function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 10);
    console.log(`Question: ${number}`);
    const x = even(number);
    const answer = readlineSync.question('You answer: ');
    if (x === answer) {
      result += 1;
      console.log('Correct!');
      continue;
    } else console.log(`'${answer}' is wrong answer ;(. Correct answer was  ${x} Let's try again, ${name}`);
    break;
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
