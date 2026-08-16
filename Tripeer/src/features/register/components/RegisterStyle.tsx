import styles from './registerStyle.module.css';
import img from '../assets/style.png';
import { styleData } from '../../../data/styleData.ts';
import { StyleTypes } from '../../../types/StyleTypes.ts';
import StyleChip from './StyleChip.tsx';
import CancelRegister from './CancelRegister.tsx';
import NextRegister from './NextRegister.tsx';
import useRegisterStyle from '../hooks/useRegisterStyle.tsx';
import zustandStore from '../../../store/store.tsx';

const RegisterStyle = () => {
  const r_nickname = zustandStore((state) => state.r_nickname);
  const { cancelHandler, nextHandler, errMsg } = useRegisterStyle();

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
            {styleData.map((item: StyleTypes, i) => {
              return (
                <StyleChip
                  key={`${item}-${i}`}
                  idx={i}
                  title={item.name}
                  image={item.image}
                />
              );
            })}
          </div>
          <div className={styles.errBox}>
            <p className={styles.err}>{errMsg}</p>
          </div>
          <section className={styles.btnBox}>
            <CancelRegister cancelHandler={cancelHandler} />
            <NextRegister nextHandler={nextHandler} text={'확인'} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default RegisterStyle;
