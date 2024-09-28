import { useCallback, useEffect } from 'react';
import { isMobileCorrectly } from '../utils/checkMobile';
import { getFCMToken, requestPermission } from '../utils/utilFcm';
import api from '../utils/api';
import zustandStore from '../store/store';
import { useShallow } from 'zustand/react/shallow';
import { sendFlutterToSendToken } from '../utils/sendFlutter';

export default function useFCM(
  setter1?: (param: boolean) => void,
  setter2?: (param: boolean) => void,
  setter3?: (param: boolean) => void,
) {
  const [isSuccess, setIsSuccess] = zustandStore(
    useShallow((state) => [state.FCM_isConnect, state.FCM_setIsConnect]),
  );
  const connectFCM = useCallback(async () => {
    const permission = await requestPermission();
    if (permission === 'granted') {
      // granted : "허가", default : "아무 설정 하지 않음", denied : "거절"
      try {
        const token = await getFCMToken();
        await api.post(`/noti?token=${token}`);
        setIsSuccess(true);
      } catch {
        setIsSuccess(false);
      }
    }
  }, [setIsSuccess]);

  useEffect(() => {
    setter3 && setter3(true);
    if (!isMobileCorrectly() && !isSuccess) {
      connectFCM();
    }
    if (isMobileCorrectly()) {
      setter1 && setter1(true);
      sendFlutterToSendToken(setter2);
    }
  }, [connectFCM, isSuccess, setter1, setter2, setter3]);

  return { isSuccess, connectFCM };
}
