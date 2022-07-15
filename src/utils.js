function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
export default getRandom;
