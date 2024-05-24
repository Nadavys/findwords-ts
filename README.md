# find words

# The solution approach

1. **Frequency Map Generation**: Create a frequency map for the input string, counting the occurrence of each letter. 

    For example, if the input string is "jello", the frequency map would be:
    ```
    {
        "j": 1,
        "e": 1,
        "l": 2,
        "o": 1
    }
    ```

2. **Dictionary Comparison**: Iterate over each word in the dictionary array. For each word, generate a letter frequency count map. Check if the word can be formed using the letters from the input string. This is done by ensuring that for every letter in the word, the count of that letter in the word is less than or equal to the count of that letter in the input string.

    For example, consider the input word "hello" with the frequency map:
    ```
    {
        "h": 1,
        "e": 1,
        "l": 2,
        "o": 1
    }
    ```
    and a dictionary word "hel" with the frequency map:
    ```
    {
        "h": 1,
        "e": 1,
        "l": 1
    }
    ```
    In this example, all the letters in the dictionary word are available in the input word with the same or higher count, therefore it is valid.

3. **Filtering**: Filter out any word that doesn't meet the requirement of step 2.
## Installation

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

- `npm run build`: Compiles the TypeScript files using the TypeScript compiler (`tsc`).

- `npm run test`: Runs the Jest tests in verbose mode.

- `npm run report`: Runs the Jest tests and then opens the test coverage report located at `coverage/lcov-report/index.html`.

- `npm run docs`: Generates JSDoc documentation and opens the main documentation file (`docs/index.html`).

- `npm run index`: Runs the index.ts source file.

- `npm run benchmark`: Executes a benchmark test to measure the performance of the `findWords` function.

## Docker

This project is configured to run inside a Docker container. 


Once the container is started, it will execute the tests and display the results. After the tests have completed, the container will automatically exit.

Ensure that the Docker client is actively running on your machine before starting the container.

```bash
docker build -t findwords-project . && docker run findwords-project
```