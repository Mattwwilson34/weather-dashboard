import { jest } from '@jest/globals';
import delay from '../delay.js';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('delay', () => {
  it('waits 500ms before resolveing promise', async () => {
    const delayPromise = delay(500);

    jest.runAllTimers();

    await delayPromise;

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
});
