import * as Y from 'yjs';

import { useEffect } from 'react';
import { WebsocketProvider } from 'y-websocket';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import useRoomInfo from './useRoomInfo';
import { useParams } from 'react-router-dom';

export default function useConnect(id: string | undefined) {
  const params = useParams();
  const { data } = useRoomInfo(params.id);
  const [setYDoc, setYWs, init, yws, connected, isConnected] = zustandStore(
    useShallow((state) => [
      state.setYDoc,
      state.setYWs,
      state.y_init,
      state.y_ws,
      state.setYConnect,
      state.y_connected,
    ]),
  );

  useEffect(() => {
    let doc: Y.Doc;
    let ws: WebsocketProvider;
    if (id && data) {
      doc = new Y.Doc();
      ws = new WebsocketProvider('wss://tripeer.co.kr/node', `room-${id}`, doc);
      setYDoc(doc);
      setYWs(ws);
      ws.on('status', (e: { status: string }) => {
        if (e.status === 'connected') connected();
      });
    }
  }, [id, setYDoc, setYWs, connected, data]);

  useEffect(() => {
    return () => {
      if (yws) {
        yws.destroy();
        init();
      }
    };
  }, [yws, init]);

  return { isLoading: !isConnected };
}
