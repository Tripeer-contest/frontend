import isMobileDevice from '../../utils/checkMobile';
import Arrow from './Arrow';
import styles from './slider.module.css';

interface ControllerProps {
  goLeft: () => void;
  goRight: () => void;
  leftMax: boolean;
  rightMax: boolean;
}

export default function SlideController({
  goLeft,
  goRight,
  leftMax,
  rightMax,
}: ControllerProps) {
  return (
    <div className={styles.controller}>
      {leftMax && !isMobileDevice() ? (
        <div />
      ) : (
        <Arrow direction="left" onClick={goLeft} />
      )}
      {rightMax && !isMobileDevice() ? (
        <div />
      ) : (
        <Arrow direction="right" onClick={goRight} />
      )}
    </div>
  );
}
