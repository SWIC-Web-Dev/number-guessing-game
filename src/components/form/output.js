export default function Output() {
  return `
    <output class="flex flex-col gap-4">
      <p class="sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600" id="message"></p>
      <p class="font-semibold">Guesses so far:</p>
      <ul id="guess-list" class="flex gap-2 [&>li]:after:content-[',']"></ul>
    </output>
  `;
}
