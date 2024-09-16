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

  // const updateTimeYList = () => {
  //   const startId = 125636;
  //   const endId = 125691;
  //   const opt = '1';
  //   mutation.mutate({ startId, endId, opt });
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
    // 원래 있던 배열
    const sourceYArray = yArray.get(sourceArrIdx) as Y.Array<totalYListInfo>;
    // 이동한 배열
    const destinationYArray = yArray.get(
      destinationArrIdx,
    ) as Y.Array<totalYListInfo>;

    // 삭제할 아이템 저장
    const movedItem = sourceYArray.get(sourceIdx);
    // 원래 있던곳에서 아이템을 삭제하고
    sourceYArray.delete(sourceIdx, 1);
    // 이동한 곳에 아이템을 삽입한다.
    destinationYArray.insert(destinationIdx, [movedItem]);

    // 해야할것
    // 1. timeYList 추가

    // updateTimeYList();
  };
  return { onDragend };
};

export default useDesktopDnd;
