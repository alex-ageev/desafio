/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start] - The starting number for the sequence. Default is 0.
 * @param {number} [step] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start: number = 0, step: number = 1) => {
  let firstCall = true; // flag to track if the function is being called for the first time
  let currVal = start;

  return () => {
    if (firstCall) {
      firstCall = false;
      currVal += step; // increment before returning on first call
    } else {
      currVal += step; //  return the incremented value on next calls
    }
    return currVal;
  };
};
