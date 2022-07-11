import {
  commonAction, getRandom,
} from './index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};
const makeGcdGame = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const gameQuestion = `${number1} ${number2}`;
  const gameAnswer = String(findGcd(number1, number2));
  return [gameQuestion, gameAnswer];
};
const startGcdGame = () => {
  commonAction(rule, makeGcdGame);
};
export default startGcdGame;
