# Number Guessing Game - Code Review & Reflection Guide

To start with, we'll need a deep dive Gist into how this code is working and what you make of it.

To help guide this, consider the following questions:

## Component Architecture

- How is the code organized into different components?
- Why do you think the code was split into separate files?
- Can you trace how the components connect together?
- What's the benefit of this modular approach?

## DOM Manipulation Understanding

- How does the code interact with HTML elements?
- What are the different ways `querySelector` is used?
- How is the game's output updated in the DOM?
- What role does the `innerHTML` property play?

## Event Handling

- How does the form submission work?
- What happens when a user submits a guess?
- Why is `e.preventDefault()` used?
- How is user input processed?

## Game Logic Analysis

In this game, "state" refers to the data that needs to be tracked while the game is running:

- The list of guesses made so far (`guesses` array)
- The random number to guess (`randomGuessNumber`)
- Whether the game is over (when you win or use all guesses)
  Think of state as "remembering" the current situation of the game.

- How does the code track the game state?
- How are guesses stored and displayed?
- How does the code determine if a guess is too high or too low?
- How does it handle the end of the game?

## Array Methods Deep Dive

- How is the `map` method used in this code?
- Why is `join("")` needed after `map`?
- Could other array methods work here? Why or why not?
- How does the code maintain the list of guesses?

---

Remember to answer thoroughly and use your own thoughts and analogies to build on whatever you may glean from the use of AI.

Feel free to [copy and paste whatever snippets](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#fenced-code-blocks) you need to into your Gist to help illustrate your points.

Now that you have reflected on the code, let's move on to enhancing the game!

---

## Game Enhancements

Try implementing these features to deepen your understanding:

### Input validation

1. Add input validation

   - Check that input is a number

     ```js
     if (isNaN(parseInt(guessInputRef.value))) {
       messageRef.textContent = "Please enter a number";
       return;
     }
     ```

   - Check that number is between 1 and 100

     ```js
     const guess = parseInt(guessInputRef.value);

     if (guess < 1 || guess > 100) {
       messageRef.textContent = "Please enter a number between 1 and 100";
       return;
     }
     ```

   - Show errors using existing message element
     (We already have: `<p id="message"></p>`)

   - Keep input value when error occurs
     (Don't clear input like we do with valid guesses)

   Hint: Add these checks at start of form submit handler

### Implement a reset game button

- Create button component:

  ```js
  // components/form/reset.js
  export default function Reset() {
    return `
      <button 
        type="button" 
        id="reset"
        class="bg-indigo-500 text-white p-2 rounded"
      >
        New Game
      </button>
    `;
  }
  ```

- Add to form component:

  ```js
  import Reset from "./reset";

  export default function Form() {
    return `
      <form class="flex flex-col gap-4">
        ${Input()}
        ${Submit()}
        ${Reset()}
        ${Output()}
      </form>
    `;
  }
  ```

- Add reference and handler:

  ```js
  // In lib.js
  export const resetButtonRef = document.querySelector("#reset");

  // In main.js
  function resetGame() {
    guesses = [];
    randomGuessNumber = Math.floor(Math.random() * 100) + 1;
    guessListRef.innerHTML = "";
    messageRef.textContent = "";
    guessInputRef.value = "";
    guessInputRef.disabled = false;
  }

  resetButtonRef.addEventListener("click", resetGame);
  ```

### Add High Score Tracking

- Add score tracking:

  ```js
  // At top with other state
  let bestScore = Infinity; // No wins yet

  // In win condition
  if (currentGuess === randomGuessNumber) {
    const score = guesses.length;
    if (score < bestScore) bestScore = score;

    messageRef.textContent = `You won in ${score} guesses! Best: ${bestScore}`;
    guessInputRef.disabled = true;
    return;
  }
  ```

### Add Visual Feedback for Guess History

- Modify the map function:

  ```js
  guessListRef.innerHTML = guesses
    .map((guess) => {
      const comparison = guess < randomGuessNumber ? "low" : "high";
      const arrow = guess < randomGuessNumber ? "↑" : "↓";

      return `
        <li class="guess-${comparison}">
          ${guess} ${arrow}
        </li>
      `;
    })
    .join("");
  ```

- Add Tailwind

  ```js
  guessListRef.innerHTML = guesses
    .map((guess) => {
      const color =
        guess < randomGuessNumber ? "text-blue-500" : "text-red-500";
      const arrow = guess < randomGuessNumber ? "↑" : "↓";
      return `
        <li class="${color}">
          ${guess} ${arrow}
        </li>
      `;
    })
    .join("");
  ```

Pick one task to start with. Each builds on core concepts from the original code:

- Task 1 practices input handling
- Task 2 reuses component patterns
- Task 3 extends state tracking
- Task 4 enhances DOM manipulation

Take it step by step. Test each change before moving to the next part. Commit early and commit often!

Remember to use the VS Code Conventional Commits extension to keep your commits organized, or just use the traditional commit style, such as: `git commit -m "Add reset button"`
