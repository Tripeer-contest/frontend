import { useParams } from 'react-router-dom';
import useConnect from './hooks/useConnect';
import CommonLoading from '../../components/loading/CommonLoading';
import useDocInfo from './hooks/useDocInfo';
import useAccess from './hooks/useAccess';
import PlanChat from './components/chat/PlanChat';
import { useEffect } from 'react';
import zustandStore from '../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function PlanDetail() {
  const [init] = zustandStore(useShallow((state) => [state.y_init]));
  const params = useParams();
  const Access = useAccess(params.id);
  const Connect = useConnect(params.id);
  const Online = useDocInfo();

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
        <>
          <PlanChat />
        </>
      )}
    </>
  );
}
