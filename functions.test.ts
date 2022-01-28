const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  //write atleast 2 tests that describe callback for shuffleArray function

  //check that shuffleArray returns an array
  //input array because shuffleArray method requires array
  let input = [];
  test("check that shuffleArray returns an array", () => {
    //expect that it will return shuffled array input to be true
    expect(Array.isArray(shuffleArray(input))).toBe(true);
  });
  test("check that it returns an array of the same length as the argument sent in", () => {
    //shuffled arrays input should be the same length as input length
    expect(shuffleArray(input).length).toBe(input.length);
  });
});
