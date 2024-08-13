import { StateCreator } from 'zustand';
import { PlanState } from './CreatePlan';
import { TownInterface } from '../../types/PlanTypes';

export const createPlanSlice: StateCreator<PlanState> = (set) => ({
  spots: [],
  startDay: '',
  endDay: '',
  planTitle: '',
  planPage: 0,
  initCreatePlan: () =>
    set(() => ({
      spots: [],
      startDay: '',
      endDay: '',
      planTitle: '',
      planPage: 0,
    })),
  addSpot: (payload: TownInterface) =>
    set((state) => ({
      spots: [...state.spots, payload],
    })),
  removeSpot: (payload: TownInterface) =>
    set((state) => ({
      spots: state.spots.filter((town) => town.idx !== payload.idx),
    })),
  planToNext: () => set((state) => ({ planPage: state.planPage + 1 })),
  planToPrev: () => set((state) => ({ planPage: state.planPage - 1 })),
});
