import { useCallback, useEffect } from 'react';
import { isMobileCorrectly } from '../utils/checkMobile';
import { getFCMToken, requestPermission } from '../utils/utilFcm';
import api from '../utils/api';
import zustandStore from '../store/store';
import { useShallow } from 'zustand/react/shallow';
import {
  sendFlutterToSendToken,
  setFlutterToSendPermission,
} from '../utils/sendFlutter';

export default function useFCM() {
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

  const connectFlutterFcm = useCallback(async () => {
    const permission = await setFlutterToSendPermission();
    const token = await sendFlutterToSendToken();
    if (token && permission) {
      try {
        await api.post(`/noti?token=${token}&type=APP`);
        setIsSuccess(true);
      } catch {
        setIsSuccess(false);
      }
    } else {
      setIsSuccess(false);
    }
  }, [setIsSuccess]);

  useEffect(() => {
    if (!isMobileCorrectly() && !isSuccess) {
      connectFCM();
    }
    if (isMobileCorrectly()) {
      connectFlutterFcm();
    }
  }, [connectFCM, isSuccess, connectFlutterFcm]);

  return { isSuccess, connectFCM, connectFlutterFcm };
}
