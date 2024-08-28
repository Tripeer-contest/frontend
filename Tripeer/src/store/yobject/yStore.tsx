import { StateCreator } from 'zustand';
import { YSliceInterface } from './YObjecttype';
import { StoreState } from '../store';

export const YObjectSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  YSliceInterface
> = (set) => ({
  y_doc: null,
  y_ws: null,
  y_connected: false,
  y_init: () => set(() => ({ y_doc: null, y_ws: null, y_connected: false })),
  setYDoc: (payload) => set(() => ({ y_doc: payload })),
  setYWs: (payload) => set(() => ({ y_ws: payload })),
  setYConnect: () => set(() => ({ y_connected: true })),
});
