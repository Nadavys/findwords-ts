const findWords = require('../src/findWords').default;


describe('Unit tests for findWords', () => {

  it('should return words that can be formed by rearranging the input - findWords test 1', () => {
    const inputString = 'ate';
    const dictionary = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual(['ate', 'eat', 'tea']);
  });


  it('should return words that can be formed by rearranging the input - findWords test 2', () => {
    const inputString = 'oogd';
    const dictionary = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual(['dog', 'do', 'god', 'goo', 'go', 'good']);
  });

  it('should return words that can be formed by rearranging the input - findWords test 3', () => {
    const inputString = 'listen';
    const dictionary = ['enlist', 'google', 'inlets', 'banana'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual(['enlist', 'inlets']);
  });

  it('should return an empty array if no words can be formed - findWords test 4', () => {
    const inputString = 'abc';
    const dictionary = ['def', 'ghi', 'jkl'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual([]);
  });

  it('When input string is empty, expect no results in the array - findWords test 4', () => {
    const inputString = '';
    const dictionary = ['foo', 'bar', 'baz'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual([]);
  });

  it('When input has a single character, expect correct match  - findWords test 4', () => {
    const inputString = 'f';
    const dictionary = ['f', 'fo', 'foo'];
    const result = findWords(inputString, dictionary);
    // console.log(">>>>",result)
    expect(result).toEqual(['f']);
  });

  it('When input has repeated characters, expect correct match  - findWords test 4', () => {
    const inputString = 'aaa';
    const dictionary = ['aaaaa','aaa', 'aa' ,'a', 'bbbaa'];
    const result = findWords(inputString, dictionary);
    expect(result).toEqual(['aaa','aa', 'a']);
  });
});


describe('Test Errors for findWords', () => {
  it('should throw an error if inputString is not a string', () => {
    expect(() => findWords(123, ['dog', 'cat'])).toThrow('inputString must be a string');
  });

  it('should throw an error if dictionary is not an array', () => {
    expect(() => findWords('dog', 'cat')).toThrow('dictionary must be an array');
  });

  it('should throw an error if any element of dictionary is not a string', () => {
    expect(() => findWords('dog', ['cat', 123])).toThrow('dictionary must be an array of strings');
  });
});