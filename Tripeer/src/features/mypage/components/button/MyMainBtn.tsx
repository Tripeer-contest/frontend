import styles from '../../assets/menu.module.css';
import direction_icon from '../../../../assets/button/arrow.svg';

export default function MyMainBtn({
  name,
  clickHandler,
}: {
  name: string;
  clickHandler: () => void;
}) {
  return (
    <div className={styles.mainBtn} onClick={clickHandler}>
      <span>{name}</span>
      <img src={direction_icon} alt="direction-icon" />
    </div>
  );
}
