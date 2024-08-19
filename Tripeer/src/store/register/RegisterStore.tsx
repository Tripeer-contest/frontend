import { StateCreator } from 'zustand';

import { RegisterSlice } from './RegisterType.ts';

export const createRegisterSlice: StateCreator<RegisterSlice> = (set) => ({
  r_pageNumber: 0,
  r_nickname: '',
  r_year: '',
  r_month: '',
  r_day: '',

  r_nextPage: () => set((state) => ({ r_pageNumber: state.r_pageNumber + 1 })),
  r_backPage: () => set((state) => ({ r_pageNumber: state.r_pageNumber - 1 })),
  r_setNickname: (value) => set(() => ({ r_nickname: value })),
  r_setYear: (value) => set(() => ({ r_year: value })),
  r_setMonth: (value) => set(() => ({ r_month: value })),
  r_setDay: (value) => set(() => ({ r_day: value })),
});
