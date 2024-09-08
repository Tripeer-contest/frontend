import { useEffect, useState } from 'react';

export default function useIsMobileSize() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
    const checkISMobile = () => {
      const isMobileSize = window.innerWidth <= 1000 ? true : false;
      setIsMobileSize(isMobileSize);
    };
    checkISMobile();
    window.addEventListener('resize', checkISMobile);

    return () => window.removeEventListener('resize', checkISMobile);
  }, []);

  return isMobileSize;
}
