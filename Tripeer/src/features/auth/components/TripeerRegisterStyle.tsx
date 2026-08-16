import { Dispatch, SetStateAction, useState } from 'react';
import { Register } from './RegisterPage';
import styles from '../assets/register.module.css';
import { styleData } from '../../../data/styleData';

export default function TripeerRegisterStyle({
  nickname,
  setStyle,
}: {
  nickname: string;
  setStyle: Dispatch<SetStateAction<Register>>;
}) {
  const [selectIdx, setSelectIdx] = useState<number[]>([]);
  const [warn, setWarn] = useState(false);
  const prevHandler = () => {
    setStyle((prev) => ({ nickname: prev.nickname }));
  };
  const isClicked = (idx: number) => {
    return selectIdx.findIndex((i) => i === idx) !== -1 ? true : false;
  };
  const addHandler = (idx: number) => {
    if (selectIdx.length === 3) return;
    setSelectIdx((prev) => [...prev, idx]);
  };
  const removeHandler = (idx: number) => {
    setSelectIdx((prev) => prev.filter((id) => id !== idx));
  };
  const nextHandler = () => {
    if (selectIdx.length === 0) setWarn(true);
    else {
      const style1 = (selectIdx[0] + 1).toString();
      const style2 = selectIdx[1] ? (selectIdx[1] + 1).toString() : null;
      const style3 = selectIdx[2] ? (selectIdx[2] + 1).toString() : null;
      setStyle((prev) => ({ ...prev, style1, style2, style3 }));
    }
  };
  return (
    <>
      <h3 className={styles.title}>{nickname}님의</h3>
      <h3 className={styles.title}>여행 스타일을 선택해주세요.</h3>
      <div className={styles.itemBox}>
        {styleData.map((item, idx) => (
          <div
            key={item.name}
            className={
              isClicked(idx) ? styles.selectItem : styles.notSelectItem
            }
            onClick={() => {
              isClicked(idx) ? removeHandler(idx) : addHandler(idx);
            }}
          >
            <img
              src={item.image}
              alt="트리피어-style-icon"
              className={styles.styleIcon}
            />
            {item.name}
          </div>
        ))}
      </div>
      {warn && (
        <p style={{ width: '300px' }} className={styles.warnText}>
          하나 이상의 스타일을 선택해주세요.
        </p>
      )}
      <div className={styles.btnBox}>
        <button className={styles.prevBtn} onClick={prevHandler}>
          이전
        </button>
        <button className={styles.nextBtn} onClick={nextHandler}>
          다음
        </button>
      </div>
      <p className={styles.infoText}>
        * 위 스타일 중 1개 이상 3개 이하의 스타일을 선택해주세요.
      </p>
    </>
  );
}
