import launchGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const makePrimeGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};
const startPrimeGame = () => {
  launchGame(rule, makePrimeGame);
};
export default startPrimeGame;
