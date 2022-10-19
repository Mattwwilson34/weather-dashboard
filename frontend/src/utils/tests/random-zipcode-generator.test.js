import getRandomZipCode from '../random-zipcode-generator.js';

describe('getRandomZipCode', () => {
  it('returns a single 5 digit random zipcode', () => {
    const zipcode = getRandomZipCode();
    expect(typeof zipcode).toBe('number');
    expect(String(zipcode).length).toBe(5);

    const zipcode2 = getRandomZipCode();
    expect(zipcode).not.toEqual(zipcode2);
  });
});
