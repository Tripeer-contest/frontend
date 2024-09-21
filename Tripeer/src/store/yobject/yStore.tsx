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
  y_init: () => set(() => ({ y_doc: null, y_ws: null })),
  setYDoc: (payload) => set(() => ({ y_doc: payload })),
  setYWs: (payload) => set(() => ({ y_ws: payload })),
});
