import Input from "./input";
import Output from "./output";
import Submit from "./submit";

export default function Form() {
  return `
    <form class="flex flex-col gap-4">
      ${Input()}
      ${Submit()}
      ${Output()}
    </form>
  `;
}
