import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

export interface YSliceInterface {
  y_doc: Y.Doc | null;
  y_ws: WebsocketProvider | null;
  y_init: () => void;
  setYDoc: (doc: Y.Doc) => void;
  setYWs: (ws: WebsocketProvider) => void;
}
