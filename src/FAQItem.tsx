type FAQItemprops = {
  question: string;
  answer: string;
};

export function FAQItem( { question, answer }: FAQItemprops) {
  return (
    <details className="rounded-xl border border-green-900/10 bg-white">
      <summary className="cursor-pointer rounded-xl px-5 py-4 font-semibold transition-colors hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
        {question}
      </summary>

      <p className="px-5 pb-5 leading-relaxed text-gray-600">
        {answer}
      </p>
    </details>

  );

}