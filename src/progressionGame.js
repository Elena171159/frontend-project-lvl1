import {
  commonAction, getRandom,
} from './greeting.js';

const rule = 'What number is missing in the progression?';
const makeProgression = (start, step) => {
  const masForProg = [];
  for (let i = 0; i <= 8; i += 1) {
    masForProg.push(start);
    // eslint-disable-next-line no-param-reassign
    start += step;
  }
  return masForProg;
};
const makeProgressionGame = () => {
  const start = getRandom(1, 10);
  const step = getRandom(1, 10);
  const progression = makeProgression(start, step);
  const hiddenElem = getRandom(1, progression.length - 2);
  const gameAnswer = String(progression[hiddenElem]);
  progression[hiddenElem] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, gameAnswer];
};
const startProgressionGame = () => {
  commonAction(rule, makeProgressionGame);
};
export default startProgressionGame;
