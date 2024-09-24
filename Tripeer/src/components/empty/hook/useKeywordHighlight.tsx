import styles from '../assets/hightlightkeyword.module.css';
export default function HighlightKeyword({
  text,
  search,
}: {
  text: string;
  search: string;
}) {
  const words = text.split(new RegExp(`(${search})`, 'gi'));
  return words.map((word, idx) =>
    word === search ? (
      <span key={idx} className={styles.highlightText}>
        {word}
      </span>
    ) : (
      <span className={styles.spanText} key={idx}>
        {word}
      </span>
    ),
  );
}
