import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import React, { useEffect, useRef } from 'react';

const type = ['', '맛집', '숙박', '명소'];

const useSearch = () => {
  const [totalYLst, setSearchList, nowCategory] = zustandStore(
    useShallow((state) => [
      state.room_totalYList,
      state.c_setSearchList,
      state.c_nowCategory,
    ]),
  );
  const ref = useRef('');

  const filtering = (value: string) => {
    const contentType = type[nowCategory];

    const result = totalYLst[0]
      .filter(
        (item) =>
          (item.title.includes(value) || item.addr.includes(value)) &&
          item.contentType.includes(contentType),
      )
      .map((item) => item.spotInfoId);
    setSearchList(result);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    ref.current = value;
    filtering(value);
  };

  useEffect(() => {
    const value = ref.current;
    filtering(value);
  }, [totalYLst, setSearchList, nowCategory]);

  return { onChangeHandler };
};

export default useSearch;
