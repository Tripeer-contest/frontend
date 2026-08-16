import { useEffect, useRef, useState } from 'react';
import useGetSearchData from './useGetSearchData.tsx';
import zustandStore from '../../../store/store.tsx';

const useSearchBar = () => {
  const [keyword, setKeyword] = useState(''); // 검색어 상태
  const [debouncedKeyword, setDebouncedKeyword] = useState(''); // 디바운스된 검색어

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetched,
    isSuccess,
  } = useGetSearchData(debouncedKeyword);

  const loadingRef = useRef<HTMLDivElement | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const [scrollTo] = zustandStore((state) => [state.scrollTo]);

  const scrollHandler = () => {
    scrollTo && scrollTo(0);
  };

  const onChangeHandler = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500); // 500ms 딜레이

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  useEffect(() => {
    const current = loadingRef.current;

    if (current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && hasNextPage) {
              fetchNextPage();
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        },
      );
      ioRef.current = observer;
      observer.observe(current);
    }

    return () => {
      if (current && ioRef.current) ioRef.current.unobserve(current);
    };
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    if (debouncedKeyword) {
      refetch();
    }
  }, [debouncedKeyword, refetch]);

  return {
    keyword,
    data,
    isLoading,
    isFetched,
    isSuccess,
    hasNextPage,
    loadingRef,
    scrollHandler,
    onChangeHandler,
  };
};

export default useSearchBar;
