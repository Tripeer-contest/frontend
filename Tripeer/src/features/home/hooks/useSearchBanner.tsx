import React, { useEffect, useRef, useState } from 'react';

const useSearchBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);
  const backRef = useRef<HTMLImageElement | null>(null);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 나중에 검색로직 들어갈곳
    e.target.value.length >= 0 ? setShowModal(true) : setShowModal(false);
  };

  const inputClickHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = (e: MouseEvent) => {
    if (
      (searchRef.current && !searchRef.current.contains(e.target as Node)) ||
      backRef.current?.contains(e.target as Node)
    ) {
      console.log('ok');
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', modalCloseHandler);
    return () => {
      document.removeEventListener('click', modalCloseHandler);
    };
  }, []);

  return {
    inputChangeHandler,
    showModal,
    inputClickHandler,
    searchRef,
    backRef,
  };
};

export default useSearchBanner;
