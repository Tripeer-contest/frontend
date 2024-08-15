import airplane1 from '../../../../assets/airplane/Airplane1.png';
import airplane2 from '../../../../assets/airplane/Airplane2.png';
import airplane3 from '../../../../assets/airplane/Airplane3.png';
import airplane4 from '../../../../assets/airplane/Airplane4.png';
import airplane5 from '../../../../assets/airplane/Airplane5.png';
import airplane6 from '../../../../assets/airplane/Airplane6.png';
import styles from '../../assets/modal.module.css';

export default function AirplaneSlider() {
  const slides = [
    airplane1,
    airplane2,
    airplane3,
    airplane4,
    airplane5,
    airplane6,
    airplane1,
    airplane2,
    airplane3,
    airplane4,
    airplane5,
    airplane6,
  ];
  return (
    <div className={styles.sliderContainer}>
      <section className={styles.slider}>
        <div className={styles.slideTrack}>
          {slides.map((img, idx) => {
            return (
              <div className={styles.slide} key={idx}>
                <img
                  src={img}
                  alt="airplane-icon"
                  style={{ width: '150px', height: '250px' }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
