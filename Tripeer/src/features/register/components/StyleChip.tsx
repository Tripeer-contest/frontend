import styles from './styleChip.module.css';
import useStyleChip from '../hooks/useStyleChip.tsx';
import React from 'react';
import zustandStore from '../../../store/store.tsx';

interface Props {
  idx: number;
  title: string;
}

const StyleChip: React.FC<Props> = ({ idx, title }) => {
  const { onClickHandler } = useStyleChip();
  const { r_style } = zustandStore();

  return (
    <body
      className={`${styles.body} ${r_style.includes(idx + 1) ? styles.check : ''}`}
      onClick={onClickHandler}
    >
      <img
        src={`/styleChip/style${idx + 1}.png`}
        alt={'styleChip'}
        className={styles.image}
      />
      <p className={styles.p}>{title}</p>
    </body>
  );
};

export default StyleChip;
