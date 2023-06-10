export function useDisplayRefs() {
  /**
   * Returns an array of numbers from 1 to 8.
   *
   * @return {array} An array of numbers from 1 to 8.
   */
  const numbersDisplayed = () => {
    const numbers = [];
    for(let i = 1; i <= 8; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  /**
   * Returns an array of 8 letters starting from 'A'.
   *
   * @return {Array<string>} An array of 8 letters.
   */
  const lettersDisplayed = () => {
    const letters = Array.from({length: 8}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    return letters;
  }

  return { numbersDisplayed, lettersDisplayed };
}