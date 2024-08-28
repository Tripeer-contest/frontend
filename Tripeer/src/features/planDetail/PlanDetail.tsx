import { useParams } from 'react-router-dom';
import useConnect from './hooks/useConnect';
import CommonLoading from '../../components/loading/CommonLoading';
import useOnline from './hooks/useOnline';
import useRoomInfo from './hooks/useRoomInfo';

export default function PlanDetail() {
  const params = useParams();
  const RoomInfo = useRoomInfo(params.id);
  const Connect = useConnect(params.id);
  const Online = useOnline();
  return (
    <>
      {Connect.isLoading && RoomInfo.isLoading && Online.isLoading ? (
        <CommonLoading />
      ) : (
        <>
          <div>연결됨</div>
        </>
      )}
    </>
  );
}
