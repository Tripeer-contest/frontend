import { StateCreator } from 'zustand';
import { StoreState } from '../store';

const initState = {
  diaryScrollTo: null,
  diaryContainerScroll: null,
  diaryDayScroll: null,
};

export interface diarySliceState {
  diaryScrollTo: ((offset: number) => void) | null;
  setDiaryScrollFn: (payload: (offset: number) => void) => void;
  diaryContainerScroll: null | number;
  diaryDayScroll: null | number[];
  setDiaryContainerScroll: (offset: number) => void;
  setDiaryDayScroll: (dayOffset: number[]) => void;
}

export const DiarySlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  diarySliceState
> = (set) => ({
  ...initState,
  setDiaryScrollFn: (payload) => set(() => ({ diaryScrollTo: payload })),
  setDiaryContainerScroll: (offset) =>
    set(() => ({ diaryContainerScroll: offset })),
  setDiaryDayScroll: (dayOffset) => set(() => ({ diaryDayScroll: dayOffset })),
});
