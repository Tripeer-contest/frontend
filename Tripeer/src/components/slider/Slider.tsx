import isMobileDevice from '../../utils/checkMobile';
import SlideController from './SlideController';
import styles from './slider.module.css';

import { ReactNode, useRef, useState } from 'react';

export default function Slider({ children }: { children: ReactNode }) {
  const sliderRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [mouseOver, setMouseOver] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const goRight = () => {
    if (sliderRef.current && trackRef.current) {
      const range = +sliderRef.current.offsetWidth;
      const maxWidth = +trackRef.current.offsetWidth - range;
      current + range > maxWidth
        ? setCurrent(maxWidth)
        : setCurrent((prev) => prev + range);
    }
  };

  const goLeft = () => {
    if (sliderRef.current) {
      const range = +sliderRef.current.offsetWidth;
      const minWidth = 0;
      current - range < minWidth
        ? setCurrent(minWidth)
        : setCurrent((prev) => prev - range);
    }
  };

  const leftMax = current === 0;

  let rightMax = false;
  if (trackRef.current && sliderRef.current) {
    rightMax =
      current === +trackRef.current.offsetWidth - sliderRef.current.offsetWidth;
  }

  const overflowSlider: { overflowX: 'scroll' | 'hidden' } = isMobileDevice()
    ? { overflowX: 'scroll' }
    : { overflowX: 'hidden' };

  return (
    <div
      className={styles.sliderContainer}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <section className={styles.slider} ref={sliderRef} style={overflowSlider}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${current}px)` }}
        >
          {children}
        </div>
      </section>
      {mouseOver && (
        <SlideController
          goLeft={goLeft}
          goRight={goRight}
          leftMax={leftMax}
          rightMax={rightMax}
        />
      )}
    </div>
  );
}
