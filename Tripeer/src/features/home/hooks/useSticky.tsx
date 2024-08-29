import { useEffect } from 'react';

const useSticky = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolled');
      if (window.scrollY > 50) {
        console.log('yes');
      } else {
        console.log('no');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSticky;
