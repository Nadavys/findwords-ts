import Benchmark from 'benchmark';
import module from './dist/findWords.js';

const findWords = module.default;

console.log('Benchmarking findWords in progress...');
const suite = new Benchmark.Suite;
// create a benchmark test
suite.add('findWords', function() {
    const inputString = 'hel';
    const dictionary = ['hello', 'hey', 'hi', 'goodbye'];
    findWords(inputString, dictionary);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {

    console.log(`The function ${this.filter('fastest').map('name')} can be executed approximately this many times in one second.`);
  })
  .run({ 'async': true });