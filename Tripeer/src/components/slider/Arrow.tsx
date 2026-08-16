import styles from './slider.module.css';
import arrow from '../../assets/button/arrow.svg';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function Arrow({ direction, onClick }: ArrowProps) {
  const leftTransitionX =
    direction === 'left'
      ? { transform: `rotate(180deg)`, cursor: 'pointer' }
      : { cursor: 'pointer' };

  return (
    <div className={styles.arrowCircle} onClick={onClick}>
      <img src={arrow} alt="arrow-direct" style={leftTransitionX} />
    </div>
  );
}
