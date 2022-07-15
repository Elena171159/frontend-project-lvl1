import launchGames from '../index.js';
import getRandom from '../utils.js';

const rule = ('What is the result of the expression?');
const checkAnswer = (num1, num2, operator) => {
  let answer;
  switch (operator) {
    case '+': answer = num1 + num2;
      break;
    case '-': answer = num1 - num2;
      break;
    case '*': answer = num1 * num2;
      break;
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
  return String(answer);
};
const makeCalkGame = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const number = getRandom(0, 2);
  const operator = operators[number];
  const gameQuestion = `${number1} ${operator} ${number2}`;
  const gameAnswer = checkAnswer(number1, number2, operator);

  return [gameQuestion, gameAnswer];
};
function startCalcGame() {
  launchGames(rule, makeCalkGame);
}
export default startCalcGame;
