import styles from './styleChip.module.css';
import useStyleChip from '../hooks/useStyleChip.tsx';
import React from 'react';

interface Props {
  idx: number;
}

const StyleChip: React.FC<Props> = ({ idx }) => {
  const { onClickHandler } = useStyleChip();

  return (
    <body className={styles.body} onClick={onClickHandler}>
      <img src={`/styleChip/style${idx + 1}.png`} alt={'styleChip'} />
    </body>
  );
};

export default StyleChip;
