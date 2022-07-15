import launchGames from '../index.js';
import getRandom from '../utils.js';

function checkEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
const rule = ('Answer "yes" if the number is even, otherwise answer "no".');
const makeEvenGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = checkEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};
function startevenGame() {
  launchGames(rule, makeEvenGame);
}
export default startevenGame;
