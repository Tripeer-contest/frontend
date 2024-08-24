import { create } from 'zustand';
import { authSlice } from './auth/AuthStore';
import { AuthState } from './auth/AuthType';
import { createPlanSlice } from './createPlan/CreatePlanStore';
import { createRegisterSlice } from './register/RegisterStore.tsx';
import { RegisterSlice } from './register/RegisterType.ts';
import { PlanState } from './createPlan/CreatePlan';
import { devtools } from 'zustand/middleware';
import { CartState } from './cart/CartSlice';
import { createCartSlice } from './cart/CartSliceStore';
import { createHomeSlice } from './home/HomeStore.tsx';
import { HomeSlice } from './home/HomeType.ts';

export type StoreState = AuthState &
  PlanState &
  RegisterSlice &
  CartState &
  HomeSlice;

const zustandStore = create<StoreState>()(
  devtools((...rest) => ({
    ...authSlice(...rest),
    ...createPlanSlice(...rest),
    ...createCartSlice(...rest),
    ...createRegisterSlice(...rest),
    ...createHomeSlice(...rest),
  })),
);

export default zustandStore;
