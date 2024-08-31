import { TouchEvent } from 'react';

export default function touchRightToLeft(callback: () => void) {
  let touchStartX: null | number = null;
  let touchEndX: null | number = null;
  const touchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const touchMove = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
  };
  const touchEnd = () => {
    if (
      touchStartX !== null &&
      touchEndX !== null &&
      touchStartX - touchEndX > 50
    ) {
      callback();
    }
    touchStartX = null;
    touchEndX = null;
  };
  return { touchStart, touchEnd, touchMove };
}
