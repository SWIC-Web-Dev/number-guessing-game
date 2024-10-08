const MAX_GUESSES = 10;

const guessInput = document.querySelector("#guess");
const guesses = [];
const guessesList = document.querySelector("#guesses");
const message = document.querySelector("#message");
const randomGuessNumber = Math.floor(Math.random() * 100) + 1;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Should we proceed or is the game over?
  if (guesses.length >= MAX_GUESSES) {
    message.textContent = `You ran out of guesses. The number was ${randomGuessNumber}.`;

    return;
  }

  // Compare the guessed STRING to the `numberToGuess` AS A STRING!
  if (guessInput.value === randomGuessNumber.toString()) {
    message.textContent = "You guessed the number!";

    return;
  }

  // Add the guess to the list of guesses
  guesses.push(parseInt(guessInput.value));

  // Clear the list before adding the new list of guesses
  guessesList.innerHTML = "";
  guesses.map((guess) => {
    guessesList.innerHTML += `<li>${guess}</li>`;
  });

  const numOfGuessesMessage = `You have ${MAX_GUESSES - guesses.length} guesses left.`;

  if (guessInput.value < randomGuessNumber)
    message.textContent = `Too low! ${numOfGuessesMessage}.`;
  else message.textContent = `Too high! ${numOfGuessesMessage}.`;
});
