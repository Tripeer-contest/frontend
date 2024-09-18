import { useParams } from 'react-router-dom';
import useConnect from './hooks/useConnect';
import CommonLoading from '../../components/loading/CommonLoading';
import useDocInfo from './hooks/useDocInfo';
import useAccess from './hooks/useAccess';
import PlanChat from './components/chat/PlanChat';
import { useEffect, useMemo } from 'react';
import zustandStore from '../../store/store';
import { useShallow } from 'zustand/react/shallow';
import PlanMap from './components/map/PlanMap';
import PlanCalendar from './components/calendar/PlanCalendar';
import useCalendarInfo from './components/calendar/hooks/useCalendarInfo.tsx';
import useDesktopDnd from './components/calendar/hooks/useDesktopDnd.tsx';

export default function PlanDetail() {
  const [init, page] = zustandStore(
    useShallow((state) => [state.y_init, state.room_page]),
  );
  const params = useParams();
  const Access = useAccess(params.id);
  const Connect = useConnect(params.id);
  const Online = useDocInfo();
  useCalendarInfo();
  useDesktopDnd();

  const MAIN_PAGE = useMemo(() => {
    return [
      <PlanChat key={'plan-chat'} />,
      <PlanMap key={'plan-map'} />,
      <PlanCalendar key={'plan-calendar'} />,
    ][page];
  }, [page]);

  useEffect(() => {
    return () => {
      init();
    };
  }, [init]);
  return (
    <>
      {Connect.isLoading && Access.isLoading && Online.isLoading ? (
        <CommonLoading />
      ) : (
        <>{MAIN_PAGE}</>
      )}
    </>
  );
}
