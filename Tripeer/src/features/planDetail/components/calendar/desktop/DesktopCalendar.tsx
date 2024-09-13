import styles from '../../../assets/calendar/Desktop/calendar.module.css';
import LeftSide from './leftSide/LeftSide.tsx';
import RightSide from './rightSide/RightSide.tsx';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';
import { totalYListInfo } from '../../../../../store/room/RoomSliceState.ts';

const DesktopCalendar = () => {
  // -------------- 테스트용 더미데이터, 나중에 삭제해야함
  const [setTotalYList, totalYList] = zustandStore(
    useShallow((state) => [state.room_setTotalYList, state.room_totalYList]),
  );

  const testData1 = {
    addr: '주소',
    contentType: '컨텐트타입',
    img: '이미지',
    latitude: 1,
    longitude: 1,
    nickname: '닉네임',
    order: 1,
    planId: 1,
    profileImage: '프사',
    spot: false,
    spotInfoId: 1,
    title: '타이틀',
    userId: 1,
    wishlist: false,
  };

  const testData2 = {
    addr: '주소',
    contentType: '컨텐트타입',
    img: '이미지',
    latitude: 1,
    longitude: 1,
    nickname: '닉네임',
    order: 1,
    planId: 1,
    profileImage: '프사',
    spot: false,
    spotInfoId: 2,
    title: '타이틀',
    userId: 1,
    wishlist: false,
  };

  const testData3 = {
    addr: '주소',
    contentType: '컨텐트타입',
    img: '이미지',
    latitude: 1,
    longitude: 1,
    nickname: '닉네임',
    order: 1,
    planId: 1,
    profileImage: '프사',
    spot: false,
    spotInfoId: 3,
    title: '타이틀',
    userId: 1,
    wishlist: false,
  };

  const testArr: totalYListInfo[] = [testData1, testData2, testData3];

  useEffect(() => {
    const update: any[] = totalYList;
    update[0] = testArr;
    setTotalYList(update);
  }, []);
  // --------------

  const onDragend = (result: DropResult) => {
    const { source, destination } = result;

    // 목적지가 이상한곳이라면
    if (!destination) return;

    // 아이템이 원래 있던 배열
    const sourceArrIdx = parseInt(source.droppableId);
    // 아이템을 이동시킨 배열
    const destinationArrIdx = parseInt(destination.droppableId);
    // 원래 있던 배열에서 어떤 인덱스였는지
    const sourceIdx = source.index;
    // 이동한 배열에서 어떤 인덱스로 이동했는지
    const destinationIdx = destination.index;

    // 전체 배열 깊은 복사
    const arr = totalYList.map((item) => [...item]);
    // 원래 있던곳에서 아이템을 삭제하고
    const [movedItem] = arr[sourceArrIdx].splice(sourceIdx, 1);
    // 이동한 곳에 아이템을 삽입한다.
    arr[destinationArrIdx].splice(destinationIdx, 0, movedItem);
    // 이동사항을 전체 리스트에 반영
    setTotalYList(arr);

    // 해야할것
    // 1. timeYList 추가
    // 2. YArray 에 변경사항 반영하기
    // 3. 변경사항 옵저브 추가
  };

  return (
    <DragDropContext onDragEnd={onDragend}>
      <main className={styles.container}>
        <LeftSide />
        <RightSide />
      </main>
    </DragDropContext>
  );
};

export default DesktopCalendar;
