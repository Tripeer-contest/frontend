import styles from './styleChip.module.css';
import React from 'react';
import useStyleChip from '../hooks/useStyleChip.tsx';

interface Props {
  idx: number;
  title: string;
  image: string;
}

const StyleChip: React.FC<Props> = ({ idx, title, image }) => {
  const { onClickHandler, r_style } = useStyleChip();
  const isCheck = r_style.includes(idx + 1);

  return (
    <main
      className={`${styles.body} ${isCheck ? styles.check : ''}`}
      onClick={() => onClickHandler(idx)}
    >
      <img src={image} alt={'styleChip'} className={styles.image} />
      <p className={styles.p}>{title}</p>
    </main>
  );
};

export default StyleChip;
