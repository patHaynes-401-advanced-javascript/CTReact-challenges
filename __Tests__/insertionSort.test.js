const insertionSort = require('./insertionSort');

describe('Date add testing', () => {

  it('can successfully add seconds', () => {
    const arr = [1, 5, 2, 100, 6, 90];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 5, 6, 90, 100]);
  });

});