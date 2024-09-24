import { StateCreator } from 'zustand';
import { PlanCalendarSlice } from './PlanCalendarType.ts';

export const createPlanCalendarSlice: StateCreator<PlanCalendarSlice> = (
  set,
) => ({
  c_nowCategory: 0,
  c_setNowCategory: (id) => set(() => ({ c_nowCategory: id })),
  c_isDragging: false,
  c_setIsDragging: (isDragging) => set(() => ({ c_isDragging: isDragging })),
  c_searchList: [],
  c_setSearchList: (arr) => set(() => ({ c_searchList: arr })),
  c_isModal: false,
  c_setIsModal: (isModal) => set(() => ({ c_isModal: isModal })),
  c_nowDay: 0,
  c_nowSetDay: (day) => set(() => ({ c_nowDay: day })),
});
