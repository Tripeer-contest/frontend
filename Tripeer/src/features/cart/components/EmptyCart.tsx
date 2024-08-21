import { useMemo } from 'react';
import EmptyBox from '../../../components/empty/EmptyBox';
import { EmptyInterface } from '../../../types/EmptyTypes';

export default function EmptyCart() {
  const emptyObj: EmptyInterface = useMemo(() => {
    return {
      mainText: '현재 찜 목록이 비었습니다.',
      subText: '가고싶은 여행 장소를 추가 해보세요.',
      btnText: '여행장소 찾아보기',
      clickHandler: () => {},
    };
  }, []);
  return <EmptyBox {...emptyObj} />;
}
