import {
  commonAction, getRandom,
} from './greeting.js';

function even(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
const rule = ('Answer "yes" if the number is even, otherwise answer "no".');
const makeEvenGame = () => {
  const gameQuestion = getRandom(1, 100);
  const gameAnswer = even(gameQuestion);
  return [gameQuestion, gameAnswer];
};
function startevenGame() {
  commonAction(rule, makeEvenGame);
}
export default startevenGame;
