import Form from "./components/form";
import H1 from "./components/h1";
import Instructions from "./components/instructions";

const app = document.querySelector("#app");

function render() {
  return `
    ${H1()}
    ${Instructions()}
    ${Form()}
  `;
}

app.innerHTML = render();

export const formRef = document.querySelector("form");
export const guessInputRef = document.querySelector("#guess");
export const guessListRef = document.querySelector("#guess-list");
export const messageRef = document.querySelector("#message");
