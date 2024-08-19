import 'swiper/css';

import styles from '../asset/header.module.css';
import RegionCategory from './RegionCategory';

export default function CartHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{'"잊지 말고 다시 확인해보세요"'}</h1>
      <RegionCategory />
    </header>
  );
}
