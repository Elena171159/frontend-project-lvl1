import launchGame from '../index.js';
import getRandom from '../utils.js';

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
const rule = ('Answer "yes" if the number is even, otherwise answer "no".');
const makeEvenGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};
function startevenGame() {
  launchGame(rule, makeEvenGame);
}
export default startevenGame;
