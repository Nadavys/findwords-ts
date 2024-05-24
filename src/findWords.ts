
/**
 * Generates a frequency map of the letters in a given string.
 *
 * @param {string} str - The string for which to generate the letter frequency map.
 * @returns {Record<string, number>} A map where the keys are letters and the values are the frequency of each letter in the input string.
 */
function generateLetterFrequencyMap(str: string): { [key: string]: number } {
  return str.split('').reduce((map: { [key: string]: number }, letter: string) => {
    map[letter] = (map[letter] || 0) + 1;
    return map;
  }, {});
}

/**
 * Finds words in a dictionary that can be formed by rearranging the letters of a given string.
 *
 * @param {string} inputString - The string to rearrange.
 * @param {string[]} dictionary - The list of words to check.
 * @returns {string[]} An array of words from the dictionary that can be formed by rearranging the letters of the input string.
 */
function findWords(inputString: string, dictionary: string[]): string[] {
  if (typeof inputString !== 'string') {
    throw new Error('inputString must be a string');
  }

  if (!Array.isArray(dictionary)) {
    throw new Error('dictionary must be an array');
  }

  if (!dictionary.every(word => typeof word === 'string')) {
    throw new Error('dictionary must be an array of strings');
  }

  const inputMap = generateLetterFrequencyMap(inputString);

  return dictionary.filter(word => {
    const currentWordMap = generateLetterFrequencyMap(word);

    return Object.keys(currentWordMap).every(letter =>
      inputMap[letter] && currentWordMap[letter] <= inputMap[letter]
    );
  });
}

export default findWords