import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

export default function useOnline() {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [ws, isConnected] = zustandStore(
    useShallow((state) => [state.y_ws, state.y_connected]),
  );
  useEffect(() => {
    const setOnlineListener = () => {
      ws?.awareness.on('change', async () => {
        //doc에 저장된 userInfo를 불러와서 online인 애들 표시한 user 객체를 생성

        const state = ws.awareness.getStates().values();
        console.group('#test');
        for (const item of state) {
          console.log(item.online);
        }
        // online 표시된 user 객체를 Store와 비교 후 저장
        // 우선적으로는 30초마다 한번씩 비동기를 통해 데이터를 불러와야 할듯
        // 하지만 아무래도 백엔드에서 초대에 따라 변화하는 userInfo를 y-doc에 표기해주는게 베스트
        // 이를 zustand로 저장하고 online 상태 변화에 따라 notify와 온라인 상태 표기 두가지 로직 추가하면 입장관련 로직은 끝
        console.groupEnd();
      });
    };

    const setStateField = () => {
      // 내 userId를 online 상태에 표기해야함
      ws?.awareness.setLocalStateField('online', 'userId');
      setIsLoading(false);
    };

    if (isConnected) {
      setOnlineListener();
      setStateField();
    }
  }, [ws, params, isConnected]);

  return { isLoading };
}
