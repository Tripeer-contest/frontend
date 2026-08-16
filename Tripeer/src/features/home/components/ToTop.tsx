import styles from '../modules/toTop.module.css';
import toUpIcon from '../../../assets/button/toUp.svg';

interface Props {
  scrollHandler: () => void;
}

const ToTop = ({ scrollHandler }: Props) => {
  return (
    <div className={styles.container} onClick={scrollHandler}>
      <img src={toUpIcon} alt="to-up-icon" className={styles.icon} />
    </div>
  );
};

export default ToTop;
