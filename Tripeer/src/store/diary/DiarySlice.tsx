import { StateCreator } from 'zustand';
import { StoreState } from '../store';

const initState = {
  diaryScrollTo: null,
};

export interface diarySliceState {
  diaryScrollTo: ((offset: number) => void) | null;
  setDiaryScrollFn: (payload: (offset: number) => void) => void;
}

export const DiarySlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  diarySliceState
> = (set) => ({
  ...initState,
  setDiaryScrollFn: (payload) => set(() => ({ diaryScrollTo: payload })),
});
