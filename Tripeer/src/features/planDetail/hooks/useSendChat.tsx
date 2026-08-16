import zustandStore from '../../../store/store';
import { useCallback } from 'react';
import getTokenInfo from '../../../utils/jwtDecode';
import { getCorrectlyNow } from '../../../utils/utilDate';

export default function useSendChat() {
  const doc = zustandStore((state) => state.y_doc);
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
      if (tokenInfo.userId !== null && chatInfo) {
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
    [doc],
  );

  return { sendMessage };
}
