import { Array as YArray } from 'yjs';
import { DropResult } from '@hello-pangea/dnd';
import {
  timeYListInfo,
  totalYListInfo,
} from '../../../../../store/room/RoomSliceState.ts';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store.tsx';
import postAtoB from '../../../api/postAtoB.ts';

const useDesktopDnd = () => {
  const [setTotalYList, setTimeYList, ws, doc, isConnected] = zustandStore(
    useShallow((state) => [
      state.room_setTotalYList,
      state.room_setTimeYList,
      state.y_ws,
      state.y_doc,
      state.y_connected,
    ]),
  );

  const loadingData: [string, string, timeYListInfo | null] = [
    '계산중',
    '0',
    null,
  ];

  useEffect(() => {
    if (isConnected && ws) {
      const yArray = ws.doc.get('totalYList');
      const observer = () => {
        setTotalYList(yArray.toJSON());
      };
      yArray.observeDeep(observer);

      return () => {
        yArray.unobserveDeep(observer);
      };
    }
  }, [isConnected, setTotalYList, ws, doc]);

  useEffect(() => {
    if (isConnected && ws) {
      const yArray = ws.doc.get('timeYList');
      const observer = () => {
        setTimeYList(yArray.toJSON());
      };
      yArray.observeDeep(observer);

      return () => {
        yArray.unobserveDeep(observer);
      };
    }
  }, [isConnected, setTimeYList, ws, doc]);

  const getAtoB = async (
    start: totalYListInfo,
    end: totalYListInfo,
    option: string,
  ) => {
    try {
      return await postAtoB(start, end, option);
    } catch (error) {
      console.error('A to B Error : ', error);
      return null;
    }
  };

  const updateTimeYList = async (
    sourceYArray: YArray<totalYListInfo>,
    destinationYArray: YArray<totalYListInfo>,
    sourceIdx: number,
    destinationIdx: number,
    sourceYTime: YArray<[string, string, timeYListInfo | null]>,
    destinationYTime: YArray<[string, string, timeYListInfo | null]>,
    sourceArrIdx: number,
    destinationArrIdx: number,
  ) => {
    //---------------------------------------------------------------------
    // 뺄때
    if (sourceArrIdx !== 0) {
      if (sourceYArray.length >= 1) {
        // 길이가 2 미만이면 비우기
        // 길이가 2 이상이면
        //// 맨앞을 빼는 경우 >> 0번을 삭제
        if (sourceIdx === 0) sourceYTime.delete(0, 1);
        //// 맨뒤를 뺴는 경우(같은 배열 내 이동 조건 추가) >> 맨끝을 삭제
        else if (
          sourceIdx === sourceYArray.length ||
          (sourceArrIdx === destinationArrIdx &&
            sourceIdx === sourceYArray.length - 1)
        ) {
          sourceYTime.delete(sourceIdx - 1, 1);
        }
        //// 중간을 뺄때 >> i번째를 삭제, i번과 i-1번을 계산해 i-1 번을 수정
        else {
          sourceYTime.delete(sourceIdx, 1);
          sourceYTime.delete(sourceIdx - 1, 1);
          sourceYTime.insert(sourceIdx - 1, [loadingData]);

          const i =
            sourceArrIdx === destinationArrIdx && sourceIdx > destinationIdx
              ? sourceIdx + 1
              : sourceIdx;

          const data = await getAtoB(
            sourceYArray.get(i - 1),
            sourceYArray.get(i),
            '0',
          );

          if (data) {
            const newYArr: [string, string, timeYListInfo | null] = [
              data.spotTime[0],
              data.spotTime[1],
              data.publicRootList,
            ];
            sourceYTime.delete(sourceIdx - 1, 1);
            sourceYTime.insert(sourceIdx - 1, [newYArr]);
          }
        }
      }
    }
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // 넣을때
    if (destinationArrIdx !== 0) {
      if (destinationYArray.length >= 2) {
        // 길이가 2 미만이면 안함
        // 길이가 2 이상일때
        //// 맨앞에 넣는경우 >> 0번에서 1번의 이동시간을 계산해서 0번에 추가
        if (destinationIdx === 0) {
          destinationYTime.insert(0, [loadingData]);
          const data = await getAtoB(
            destinationYArray.get(0),
            destinationYArray.get(1),
            '0',
          );

          if (data) {
            const newYArr: [string, string, timeYListInfo | null] = [
              data.spotTime[0],
              data.spotTime[1],
              data.publicRootList,
            ];
            destinationYTime.delete(0, 1);
            destinationYTime.insert(0, [newYArr]);
          }
        }
        //// 맨끝에 넣는경우 >> 길이-1과 길이-2의 이동시간을 계산해서 마지막에 추가
        else if (destinationIdx === destinationYArray.length - 1) {
          destinationYTime.insert(destinationYTime.length, [loadingData]);
          const data = await getAtoB(
            destinationYArray.get(destinationYArray.length - 2),
            destinationYArray.get(destinationYArray.length - 1),
            '0',
          );

          if (data) {
            const newYArr: [string, string, timeYListInfo | null] = [
              data.spotTime[0],
              data.spotTime[1],
              data.publicRootList,
            ];
            destinationYTime.delete(destinationYTime.length - 1, 1);
            destinationYTime.insert(destinationYTime.length, [newYArr]);
          }
        }
        //// 중간에 넣는 경우 >> i와 i+1의 시간을 계산해 i에 추가, i와 i-1을 계산해서 i-1을 수정
        else {
          destinationYTime.delete(destinationIdx - 1, 1);
          destinationYTime.insert(destinationIdx - 1, [loadingData]);
          destinationYTime.insert(destinationIdx, [loadingData]);

          const front = await getAtoB(
            destinationYArray.get(destinationIdx - 1),
            destinationYArray.get(destinationIdx),
            '0',
          );

          if (front) {
            const newYArr: [string, string, timeYListInfo | null] = [
              front.spotTime[0],
              front.spotTime[1],
              front.publicRootList,
            ];
            destinationYTime.delete(destinationIdx - 1, 1);
            destinationYTime.insert(destinationIdx - 1, [newYArr]);
          }

          const back = await getAtoB(
            destinationYArray.get(destinationIdx),
            destinationYArray.get(destinationIdx + 1),
            '0',
          );

          if (back) {
            const newYArr: [string, string, timeYListInfo | null] = [
              back.spotTime[0],
              back.spotTime[1],
              back.publicRootList,
            ];
            destinationYTime.delete(destinationIdx, 1);
            destinationYTime.insert(destinationIdx, [newYArr]);
          }
        }
      }
    }
    //---------------------------------------------------------------------
  };

  const onDragend = (result: DropResult) => {
    const { source, destination } = result;

    // 목적지가 이상한곳이라면
    if (!destination || !ws) return;

    // 아이템이 원래 있던게 몇번째 배열인지
    const sourceArrIdx = parseInt(source.droppableId);
    // 아이템을 이동시킨게 몇번째 배열인지
    const destinationArrIdx = parseInt(destination.droppableId);
    // 원래 있던 배열에서 어떤 인덱스였는지
    const sourceIdx = source.index;
    // 이동한 배열에서 어떤 인덱스로 이동했는지
    const destinationIdx = destination.index;

    // yArray 가져오기
    const yArray = ws.doc.getArray('totalYList');
    const timeYList = ws.doc.getArray('timeYList');
    // 원래 있던 배열
    const sourceYArray = yArray.get(sourceArrIdx) as YArray<totalYListInfo>;
    const sourceYTime = timeYList.get(sourceArrIdx) as YArray<
      [string, string, timeYListInfo | null]
    >;
    // 이동한 배열
    const destinationYArray = yArray.get(
      destinationArrIdx,
    ) as YArray<totalYListInfo>;
    const destinationYTime = timeYList.get(destinationArrIdx) as YArray<
      [string, string, timeYListInfo | null]
    >;

    // 삭제할 아이템 저장
    const movedItem = sourceYArray.get(sourceIdx);
    // 원래 있던곳에서 아이템을 삭제하고
    sourceYArray.delete(sourceIdx, 1);
    // 이동한 곳에 아이템을 삽입한다.
    destinationYArray.insert(destinationIdx, [movedItem]);

    // 해야할것
    // 1. timeYList 추가

    updateTimeYList(
      sourceYArray,
      destinationYArray,
      sourceIdx,
      destinationIdx,
      sourceYTime,
      destinationYTime,
      sourceArrIdx,
      destinationArrIdx,
    ).then();
  };
  return { onDragend };
};

export default useDesktopDnd;
