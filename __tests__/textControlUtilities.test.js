import { calculateCounterState } from '../src/utilities/textControlUtilities';

describe("Testing of the calculateCounterState function", () => {
  const counterLimit = 5;

  it("If the text is visible next click should increase counter", () => {
    expect(1).toBe(calculateCounterState({'textDisplay': true, 'counter': 0}, counterLimit));
  });

  it("If the text isn't visible next click shouldn't increase counter", () => {
    expect(1).toBe(calculateCounterState({'textDisplay': false, 'counter': 1}, counterLimit));
  });

  it("If the text is visible and the counter limit is exceeded the counter should be reset", () => {
    expect(0).toBe(calculateCounterState({'textDisplay': true, 'counter': 5}, counterLimit));
  });
});
