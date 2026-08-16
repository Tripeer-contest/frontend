import { StateCreator } from 'zustand';
import { PlanState } from './CreatePlan';
import { TownInterface } from '../../types/PlanTypes';
import { StoreState } from '../store';

const initialState = {
  spots: [],
  startDay: '',
  endDay: '',
  planTitle: '',
  planPage: 0,
};

export const createPlanSlice: StateCreator<
  StoreState, // 전체 스토어의 상태 타입
  [['zustand/devtools', never]], // 미들웨어의 타입(zustand documentation에 있습니다.)
  [], // persist state에 대한 타입
  PlanState // 지금 쓰여지는 슬라이스에 대한 타입
> = (set) => ({
  ...initialState,
  initCreatePlan: () =>
    set(() => ({
      ...initialState,
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
  setStartDay: (payload) => set(() => ({ startDay: payload })),
  setEndDay: (payload) => set(() => ({ endDay: payload })),
  setTitle: (payload) => set(() => ({ planTitle: payload })),
});
