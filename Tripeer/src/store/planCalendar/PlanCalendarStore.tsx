import { StateCreator } from 'zustand';
import { PlanCalendarSlice } from './PlanCalendarType.ts';

export const createPlanCalendarSlice: StateCreator<PlanCalendarSlice> = (
  set,
) => ({
  c_nowCategory: 0,
  c_setNowCategory: (id: number) => set(() => ({ c_nowCategory: id })),
});
