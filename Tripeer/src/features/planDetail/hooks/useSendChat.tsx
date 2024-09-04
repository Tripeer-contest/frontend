import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useCallback } from 'react';
import getTokenInfo from '../../../utils/jwtDecode';
import { getCorrectlyNow } from '../../../utils/utilDate';

export default function useSendChat() {
  const [isConnected, doc] = zustandStore(
    useShallow((state) => [state.y_connected, state.y_doc]),
  );
  const sendMessage = useCallback(
    (message: string) => {
      const tokenInfo = getTokenInfo();
      const {
        currentYear,
        currentMonth,
        currentDay,
        currentHours,
        currentMinutes,
        currentPeriod,
      } = getCorrectlyNow();
      const chatInfo = doc?.getArray('chatInfo');
      if (isConnected && tokenInfo.userId !== null && chatInfo) {
        const newChat = {
          userId: tokenInfo.userId,
          message: message,
          year: currentYear,
          month: currentMonth,
          day: currentDay,
          hours: currentHours,
          minutes: currentMinutes,
          amOrPm: currentPeriod,
        };
        chatInfo.insert(chatInfo.length, [newChat]);
      }
    },
    [isConnected, doc],
  );

  return { sendMessage };
}
