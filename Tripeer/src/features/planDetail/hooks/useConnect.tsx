import * as Y from 'yjs';

import { useEffect } from 'react';
import { WebsocketProvider } from 'y-websocket';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import useRoomInfo from './useAccess';
import getTokenInfo from '../../../utils/jwtDecode';
import { OnlineInfo } from '../../../store/room/RoomSliceState';

export default function useConnect(id: string | undefined) {
  const { isSuccess } = useRoomInfo(id);
  const [setYDoc, setYWs, init, yws, connected, isConnected, setUserInfo] =
    zustandStore(
      useShallow((state) => [
        state.setYDoc,
        state.setYWs,
        state.y_init,
        state.y_ws,
        state.setYConnect,
        state.y_connected,
        state.room_setUserInfo,
      ]),
    );

  useEffect(() => {
    let doc: Y.Doc;
    let ws: WebsocketProvider;
    if (id && isSuccess) {
      doc = new Y.Doc();
      ws = new WebsocketProvider('wss://tripeer.co.kr/node', `room-${id}`, doc);
      setYDoc(doc);
      setYWs(ws);

      ws.on('sync', (isSynced: boolean) => {
        if (isSynced) {
          ws.awareness.on('change', () => {
            setTimeout(() => {
              const states = ws.awareness.getStates().values();
              const YUserInfo = ws.doc.getArray('userInfo').toJSON();
              const newUserInfo: OnlineInfo[] = [];
              if (YUserInfo.length > 0) {
                YUserInfo.forEach((user) => {
                  newUserInfo.push({ ...user, isOnline: false });
                });
              }
              for (const state of states) {
                if (state && state.online) {
                  const idx = newUserInfo.findIndex(
                    (user) => user.userId === state.online,
                  );
                  if (idx !== -1) newUserInfo[idx].isOnline = true;
                  setUserInfo(newUserInfo);
                }
              }
              connected();
            }, 500);
          });
          const tokenInfo = getTokenInfo();
          ws.awareness.setLocalStateField('online', tokenInfo.userId);
        }
      });
    }
  }, [id, setYDoc, setYWs, connected, setUserInfo, isSuccess]);

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
