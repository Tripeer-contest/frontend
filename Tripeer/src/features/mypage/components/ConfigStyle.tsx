import { Dispatch, SetStateAction } from 'react';
import styleCategory from '../../../data/TripStyle';
import styles from '../assets/config/style.module.css';
import { ProfileFormType } from '../../../types/UserTypes';
import useStyleValidate from '../hooks/useStyleValidate';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import { handleErrorImg } from '../../../data/defaultImg';

export default function ConfigStyle({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<ProfileFormType>>;
}) {
  const { clickHandler, getCategoryStyle, warn } = useStyleValidate(setForm);

  return (
    <>
      <div className={styles.gridBox}>
        <div className={styles.subTitleBox}>
          <p>여행스타일</p>
          <p>(최대 3개)</p>
        </div>
        <div className={styles.styleFlex}>
          {styleCategory.map((category, idx) => (
            <div
              key={category.id}
              onClick={() => clickHandler(category.title, idx)}
              className={getCategoryStyle(category.title)}
            >
              <img
                src={category.img}
                alt="category-style"
                onError={handleErrorImg}
              />
              <span>{category.title}</span>
            </div>
          ))}
        </div>
      </div>
      <Notify
        isActive={warn}
        message="최소 하나 이상의 스타일을 선택하여야 합니다."
        title="알림"
        img={warn_icon}
      />
    </>
  );
}
