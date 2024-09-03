import inactiveChat from '../assets/icon/chat.svg';
import inactiveMap from '../assets/icon/map.svg';
import inactiveCalendar from '../assets/icon/calendar.svg';
import activeChat from '../assets/icon/active/chat.svg';
import activeMap from '../assets/icon/active/map.svg';
import activeCalendar from '../assets/icon/active/calendar.svg';
import { useMemo } from 'react';

export default function useNavBtn(page: 0 | 1 | 2) {
  const chatBtn = useMemo(() => {
    return page === 0
      ? { img: activeChat, style: { color: '#000000' } }
      : { img: inactiveChat, style: { color: '#979797' } };
  }, [page]);
  const mapBtn = useMemo(() => {
    return page === 1
      ? { img: activeMap, style: { color: '#000000' } }
      : { img: inactiveMap, style: { color: '#979797' } };
  }, [page]);
  const calendarBtn = useMemo(() => {
    return page === 2
      ? { img: activeCalendar, style: { color: '#000000' } }
      : { img: inactiveCalendar, style: { color: '#979797' } };
  }, [page]);
  return { chatBtn, mapBtn, calendarBtn };
}
