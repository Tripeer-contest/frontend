import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { CommonSliceState } from './CommonSliceState';

const initState = {
  scrollTo: null,
};

export const CommonSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  CommonSliceState
> = (set) => ({
  ...initState,
  setScrollFn: (payload) => set(() => ({ scrollTo: payload })),
});
