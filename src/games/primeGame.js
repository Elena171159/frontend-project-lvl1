import launchGames from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const makePrimeGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = checkPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};
const startPrimeGame = () => {
  launchGames(rule, makePrimeGame);
};
export default startPrimeGame;
