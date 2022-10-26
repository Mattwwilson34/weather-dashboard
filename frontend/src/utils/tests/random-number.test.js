import getRandomIntInclusive from '../random-number.js';

describe('random number', () => {
  it('returns a random inclusive number between 2 ranges', () => {
    const number = getRandomIntInclusive(1, 100);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(100);
  });
});
