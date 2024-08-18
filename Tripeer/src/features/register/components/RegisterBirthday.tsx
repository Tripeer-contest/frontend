import styles from './registerBirthday.module.css';
import img from '../assets/birthday.png';
import React from 'react';

interface Props {
  nickname: string;
}

const RegisterBirthday: React.FC<Props> = ({ nickname }) => {
  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'register-loading'} className={styles.img} />
      </div>
      <div className={styles.body}>
        <section className={styles.box}>
          <p className={styles.body_p}>{nickname}님</p>
          <p className={styles.body_p}>생년월일을 알려주세요.</p>
        </section>
      </div>
    </main>
  );
};

export default RegisterBirthday;
