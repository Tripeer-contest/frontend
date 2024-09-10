import styles from './styleChip.module.css';
import React from 'react';
import useStyleChip from '../hooks/useStyleChip.tsx';
import zustandStore from '../../../store/store.tsx';

interface Props {
  idx: number;
  title: string;
  image: string;
}

const StyleChip: React.FC<Props> = ({ idx, title, image }) => {
  const { onClickHandler } = useStyleChip();
  const r_style = zustandStore((state) => state.r_style);

  return (
    <main
      className={`${styles.body} ${r_style.includes(idx + 1) ? styles.check : ''}`}
      onClick={() => onClickHandler(idx)}
    >
      <img src={image} alt={'styleChip'} className={styles.image} />
      <p className={styles.p}>{title}</p>
    </main>
  );
};

export default StyleChip;
