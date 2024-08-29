import { Fragment } from 'react/jsx-runtime';
import SpotLine from './SpotLine';
import styles from '../assets/meta.module.css';

export default function SpotMeta() {
  const items = [
    { type: '문의 및 안내', content: '031-943-0828' },
    { type: '영업시간', content: '11:30 ~ 22:00' },
  ];
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.type}>
          <div className={styles.jumpBox}>
            <div className={styles.container}>
              <h3 className={styles.header}>{item.type}</h3>
              <p className={styles.content}>{item.content}</p>
            </div>
            <SpotLine />
          </div>
        </Fragment>
      ))}
    </>
  );
}
