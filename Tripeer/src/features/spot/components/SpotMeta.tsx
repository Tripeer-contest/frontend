import { Fragment } from 'react/jsx-runtime';
import SpotLine from './SpotLine';
import styles from '../assets/meta.module.css';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { cleanHTMLBRString, cleanHTMLString } from '../../../utils/utilString';

export default function SpotMeta({ id }: { id: number }) {
  const { data } = useSpotDetailQuery(id, (data) => data.data.additionalInfo);

  return (
    <>
      {data.map((item, idx) => (
        <Fragment key={idx}>
          <div className={styles.jumpBox}>
            <div className={styles.container}>
              <h3 className={styles.header}>{item.title}</h3>
              <p className={styles.content}>
                {cleanHTMLString(cleanHTMLBRString(item.content))}
              </p>
            </div>
            <SpotLine />
          </div>
        </Fragment>
      ))}
    </>
  );
}
