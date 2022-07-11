import {
  commonAction, getRandom,
} from './index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const makePrimeGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = checkPrime(gameQuestion);
  return [gameQuestion, gameAnswer];
};
const startPrimeGame = () => {
  commonAction(rule, makePrimeGame);
};
export default startPrimeGame;
