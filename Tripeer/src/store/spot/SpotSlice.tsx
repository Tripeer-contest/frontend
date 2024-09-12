import { StateCreator } from 'zustand';
import { StoreState } from '../store';

const initState = {
  spot_prevPage: null,
};

export interface SpotSliceInterface {
  spot_prevPage: null | string;
  spot_setPrevNull: () => void;
  spot_setPrevPage: (page: string) => void;
}

export const SpotSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  SpotSliceInterface
> = (set) => ({
  ...initState,
  spot_setPrevNull: () => set(() => ({ spot_prevPage: null })),
  spot_setPrevPage: (page) => set(() => ({ spot_prevPage: page })),
});
