export default function HighlightText({
  text,
  search,
}: {
  text: string;
  search: string;
}) {
  const words = text.split(new RegExp(`(${search})`, 'gi'));
  console.log(words);
  return words.map((word, idx) =>
    word === search ? (
      <span key={idx} style={{ color: '#04ACB5' }}>
        {word}
      </span>
    ) : (
      <span key={idx}>{word}</span>
    ),
  );
}
