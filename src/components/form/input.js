export default function Input() {
  return `
    <div class="flex items-center gap-4">
        <label for="guess" class="font-semibold"> Enter a guess:</label>
        <input
          type="number"
          id="guess"
          class="rounded-md border border-gray-300 p-2 text-slate-900"
          min="1"
          max="100"
        />
      </div>
  `;
}
