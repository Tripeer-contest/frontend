import { useRef, useState } from 'react';
import zustandStore from '../../../../../store/store';

export default function PlanNavigate({ startDay }: { startDay: number }) {
  const doc = zustandStore((state) => state.y_doc);
  const [dayIdx, setDayIdx] = useState(startDay > 0 ? startDay : 1);
  const timeList = useRef(doc?.getArray('timeYList').toJSON());
  console.log(timeList);
  const setPrevDay = () => {
    if (!timeList.current) return;
    if (dayIdx === 1) setDayIdx(timeList.current.length - 1);
    else setDayIdx((prev) => prev - 1);
  };
  const setNextDay = () => {
    if (!timeList.current) return;
    if (dayIdx === timeList.current.length - 1) setDayIdx(1);
    else setDayIdx((prev) => prev + 1);
  };
  return <div></div>;
}
