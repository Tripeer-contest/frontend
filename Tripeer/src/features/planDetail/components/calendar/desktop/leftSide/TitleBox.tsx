import styles from '../../../../assets/calendar/Desktop/leftSide/titleBox.module.css';
import flagImage from '../../../../assets/calendar/assets/flag.png';

const TitleBox = () => {
  return (
    <div className={styles.container}>
      <img
        src={flagImage}
        alt={'Calendar Flag Image'}
        className={styles.flagImage}
      />
      <p className={styles.title}>우리의 여행지 목록</p>
    </div>
  );
};

export default TitleBox;
