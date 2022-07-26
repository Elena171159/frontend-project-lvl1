import launchGame from '../index.js';
import getRandom from '../utils.js';

const rule = ('What is the result of the expression?');
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
};
const makeCalkGame = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const number = getRandom(0, operators.length - 1);
  const operator = operators[number];
  const gameQuestion = `${number1} ${operator} ${number2}`;
  const gameAnswer = String(calculate(number1, number2, operator));

  return [gameQuestion, gameAnswer];
};
function startCalcGame() {
  launchGame(rule, makeCalkGame);
}
export default startCalcGame;
