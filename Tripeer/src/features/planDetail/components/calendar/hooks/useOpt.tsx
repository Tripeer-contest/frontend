// import zustandStore from '../../../../../store/store.tsx';
// import { useShallow } from 'zustand/react/shallow';
// import { useQuery } from '@tanstack/react-query';
// import postAtoB from '../../../api/postAtoB.ts';

const useOpt = () => {
  // const [totalYList] = zustandStore(
  //   useShallow((state) => [state.room_totalYList]),
  // );

  const onClickHandler = () => {
    // const startId = totalYList[0][0].spotInfoId;
    // const endId = totalYList[0][1].spotInfoId;
    // const option = '0';
    //
    // const query = useQuery({
    //   queryKey: ['AtoB'],
    //   queryFn: () => postAtoB(startId, endId, option),
    // });
    //
    // console.log(query.data);
  };

  return { onClickHandler };
};

export default useOpt;
