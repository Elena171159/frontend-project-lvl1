import {
  commonAction, getRandom,
} from './greeting.js';

const rule = ('What is the result of the expression?');
const checkAnswer = (q) => {
  const quis = q.split(' ');
  let answer;
  switch (quis[1]) {
    case '+': answer = Number(quis[0]) + Number(quis[2]);
      break;
    case '-': answer = Number(quis[0]) - Number(quis[2]);
      break;
    case '*': answer = Number(quis[0]) * Number(quis[2]);
      break;
    default: console.log('default');
  }
  return String(answer);
};
const makeCalkGame = () => {
  const operators = ['+', '-', '*'];
  const getRandomOperator = () => Math.floor(Math.random() * (2 - 0 + 1) + 0);
  const number = getRandomOperator();
  const operator = operators[number];
  const gameQuestion = `${getRandom()} ${operator} ${getRandom()}`;
  const gameAnswer = checkAnswer(gameQuestion);

  return [gameQuestion, gameAnswer];
};
function startCalcGame() {
  commonAction(rule, makeCalkGame);
}
export default startCalcGame;
