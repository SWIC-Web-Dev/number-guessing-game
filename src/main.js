import { formRef, guessInputRef, guessListRef, messageRef } from "./lib";

const MAX_GUESSES = 10;

const guesses = [];
const randomGuessNumber = Math.floor(Math.random() * 100) + 1;

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentGuess = parseInt(guessInputRef.value);

  if (currentGuess === randomGuessNumber) {
    messageRef.textContent = "You guessed the number!";

    return;
  }

  // Add the guess to the list of guesses
  guesses.push(parseInt(guessInputRef.value));

  // Should we proceed or is the game over?
  if (guesses.length >= MAX_GUESSES) {
    messageRef.textContent = `You ran out of guesses. The number was ${randomGuessNumber}.`;

    return;
  }

  // Clear the list before adding the new list of guesses
  guessListRef.innerHTML = "";

  guesses.map((guess) => {
    guessListRef.innerHTML += `<li>${guess}</li>`;
  });

  const numOfGuessesMessageRef = `You have ${MAX_GUESSES - guesses.length} guesses left.`;

  if (currentGuess < randomGuessNumber)
    messageRef.textContent = `Too low! ${numOfGuessesMessageRef}.`;
  else messageRef.textContent = `Too high! ${numOfGuessesMessageRef}.`;
});
