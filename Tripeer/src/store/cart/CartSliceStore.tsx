import { StateCreator } from 'zustand';
import { CartState } from './CartSlice';
import { StoreState } from '../store';

const initialState = {
  cart_selectCategory: 0,
};

export const createCartSlice: StateCreator<
  StoreState, // 전체 스토어의 상태 타입
  [['zustand/devtools', never]], // 미들웨어의 타입(zustand documentation에 있습니다.)
  [], // persist state에 대한 타입
  CartState // 지금 쓰여지는 슬라이스에 대한 타입
> = (set) => ({
  ...initialState,
  cart_init: () => set(() => ({ ...initialState })),
  cart_setCategory: (idx: number) =>
    set(() => ({
      cart_selectCategory: idx,
    })),
});
