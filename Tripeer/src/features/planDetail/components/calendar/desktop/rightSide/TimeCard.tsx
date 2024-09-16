import styles from '../../../../assets/calendar/Desktop/rightSide/timeCard.module.css';
import transportImage from '../../../../assets/calendar/assets/transport.png';
// import carImage from '../../../../assets/calendar/assets/car.png';

interface Props {
  isDragging: boolean;
}

const TimeCard = ({ isDragging }: Props) => {
  return (
    !isDragging && (
      <main className={styles.container}>
        <div className={styles.line} />
        <section className={styles.box}>
          <img
            src={transportImage}
            alt={'Option Image'}
            className={styles.image}
          />
          <p className={styles.time}>10시간 36분</p>
        </section>
        <div className={styles.line} />
      </main>
    )
  );
};

export default TimeCard;
