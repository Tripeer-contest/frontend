import { ControllerInterface } from '../../types/CartTypes';
import styles from './controller.module.css';

export default function ListController({
  Category,
  selectedCategry,
  slideTo,
}: ControllerInterface) {
  const step = 100 / Category.length;

  const pointStyle = {
    width: `${step}%`,
    left: `${selectedCategry * step}%`,
  };

  const isCategoryHighlight = (idx: number) =>
    idx === selectedCategry
      ? { color: '#4fbdb7', fontWeight: '700' }
      : undefined;

  return (
    <aside className={styles.remoteContainer}>
      <ul className={styles.cartRemote}>
        {Category.map((category, idx) => (
          <li
            style={isCategoryHighlight(idx)}
            className={styles.category}
            onClick={() => slideTo(idx)}
            key={category}
          >
            {category}
          </li>
        ))}
        <div className={styles.pointLine} style={pointStyle} />
      </ul>
    </aside>
  );
}
