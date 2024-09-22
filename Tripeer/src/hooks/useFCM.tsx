import { useCallback, useState } from 'react';
import { isMobileCorrectly } from '../utils/checkMobile';
import { desktopConnect } from '../utils/utilFcm';

export default function useFCM() {
  const [token, setToken] = useState<null | string>(
    localStorage.getItem('tripeer-fcm'),
  );

  const fcmConnect = useCallback(async () => {
    const isMobile = isMobileCorrectly();
    if (!isMobile) {
      const fcmToken = await desktopConnect();
      setToken(fcmToken);
    }
  }, []);

  const fcmDisconnect = useCallback(async () => {
    const isMobile = isMobileCorrectly();
    if (!isMobile) {
      localStorage.removeItem('tripeer-fcm');
      setToken(null);
    }
  }, []);

  return { fcmConnect, fcmDisconnect, token };
}
