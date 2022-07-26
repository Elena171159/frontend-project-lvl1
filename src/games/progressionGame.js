import launchGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;
const makeProgression = (start, step) => {
  const masForProg = [];
  for (let i = 0; i < progressionLength; i += 1) {
    masForProg.push(start + (step * i));
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
  launchGame(rule, makeProgressionGame);
};
export default startProgressionGame;
