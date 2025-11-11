export default function button({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition mb-6 cursor-pointer"
    >
      {text}
    </button>
  );
}
