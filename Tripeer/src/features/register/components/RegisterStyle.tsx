import styles from './registerStyle.module.css';
import img from '../assets/style.png';
import zustandStore from '../../../store/store.tsx';
import StyleChip from './StyleChip.tsx';

const RegisterStyle = () => {
  const { r_nickname } = zustandStore();

  const styleList = [
    '관광지',
    '문화시설',
    '축제',
    '패키지',
    '레포츠',
    '쇼핑',
    '음식점',
  ];

  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'style'} className={styles.img} />
      </div>
      <div className={styles.body}>
        <section className={styles.box}>
          <p className={styles.body_p}>{r_nickname} 님의</p>
          <p className={styles.body_p}>여행스타일을 골라주세요</p>
          <div className={styles.chipBox}>
            {styleList.map((item, i) => {
              return (
                <StyleChip key={`${item}-${i}`} idx={i} title={styleList[i]} />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterStyle;
