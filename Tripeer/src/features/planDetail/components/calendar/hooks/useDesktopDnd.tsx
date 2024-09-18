import Y from 'yjs';
import { DropResult } from '@hello-pangea/dnd';
import { totalYListInfo } from '../../../../../store/room/RoomSliceState.ts';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store.tsx';
// import { useMutation } from '@tanstack/react-query';
// import postAtoB from '../../../api/postAtoB.ts';
//
// interface Props {
//   startId: number;
//   endId: number;
//   opt: string;
// }

const useDesktopDnd = () => {
  const [setTotalYList, ws, doc, isConnected] = zustandStore(
    useShallow((state) => [
      state.room_setTotalYList,
      state.y_ws,
      state.y_doc,
      state.y_connected,
    ]),
  );

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

  // const updateTimeYList = (
  //   sourceYArray: Y.Array<totalYListInfo>,
  //   destinationYArray: Y.Array<totalYListInfo>,
  //   sourceIdx: number,
  //   destinationIdx: number,
  //   sourceYTime: Y.Array<[number, number, timeYListInfo]>,
  //   destinationYTime: Y.Array<[number, number, timeYListInfo]>,
  // ) => {
  //   const startId = 125636;
  //   const endId = 125691;
  //   const opt = '1';
  //   mutation.mutate({ startId, endId, opt });
  //
  //   // 뺄때
  //   // 길이가 2 미만이면 비우기
  //   // 길이가 2 이상이면
  //   if (sourceYArray.length >= 2) {
  //     //// 맨앞을 빼는 경우 >> 0번을 삭제
  //     if (sourceIdx === 0) sourceYTime.delete(0, 1);
  //     //// 맨뒤를 뺴는 경우 >> 맨끝을 삭제
  //     else if (sourceIdx === sourceYArray.length)
  //       sourceYTime.delete(sourceIdx - 1, 1);
  //     //// 중간을 뺄때 >> i번째를 삭제, i번과 i-1번을 계산해 i-1 번을 수정
  //     else {
  //       sourceYTime.delete(sourceIdx, 1);
  //       const res = postAtoB(
  //         sourceYArray.get(sourceIdx - 1).spotInfoId,
  //         sourceYArray.get(sourceIdx).spotInfoId,
  //         '0',
  //       );
  //       sourceYTime.delete(sourceIdx - 1, 1);
  //       sourceYTime.insert(sourceIdx - 1, [res.data]);
  //     }
  //   }
  //
  //   // 넣을때
  //   // 길이가 2 미만이면 안함
  //   // 길이가 2 이상일때
  //   //// 맨앞에 넣는경우 >> 0번에서 1번의 이동시간을 계산해서 0번에 추가
  //   //// 맨끝에 넣는경우 >> 길이-1과 길이-2의 이동시간을 계산해서 마지막에 추가
  //   //// 중간에 넣는 경우 >> i와 i+1의 시간을 계산해 i에 추가, i와 i-1을 계산해서 i-1을 수정
  // };

  // const mutation = useMutation({
  //   mutationFn: ({ startId, endId, opt }: Props) =>
  //     postAtoB(startId, endId, opt),
  //   onSuccess: () => {},
  //   onError: () => {},
  // });

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
    // const timeYList = ws.doc.getArray('timeYList');
    // 원래 있던 배열
    const sourceYArray = yArray.get(sourceArrIdx) as Y.Array<totalYListInfo>;
    // const sourceYTime = timeYList.get(sourceArrIdx) as Y.Array<
    //   [number, number, timeYListInfo]
    // >;
    // 이동한 배열
    const destinationYArray = yArray.get(
      destinationArrIdx,
    ) as Y.Array<totalYListInfo>;
    // const destinationYTime = timeYList.get(destinationArrIdx) as Y.Array<
    //   [number, number, timeYListInfo]
    // >;

    // 삭제할 아이템 저장
    const movedItem = sourceYArray.get(sourceIdx);
    // 원래 있던곳에서 아이템을 삭제하고
    sourceYArray.delete(sourceIdx, 1);
    // 이동한 곳에 아이템을 삽입한다.
    destinationYArray.insert(destinationIdx, [movedItem]);

    // 해야할것
    // 1. timeYList 추가

    // updateTimeYList(
    //   sourceYArray,
    //   destinationYArray,
    //   sourceIdx,
    //   destinationIdx,
    //   sourceYTime,
    //   destinationYTime,
    // );
  };
  return { onDragend };
};

export default useDesktopDnd;
