import { useEffect } from 'react';

const setViewport = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export default function useViewport() {
  useEffect(() => {
    setViewport();
    window.addEventListener('resize', setViewport);
    window.addEventListener('focusin', () => {
      document.body.style.position = 'fixed';
    });

    window.addEventListener('focusout', () => {
      document.body.style.position = '';
    });
  }, []);
}
