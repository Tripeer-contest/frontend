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

export type StoreState = AuthState & PlanState & RegisterSlice & CartState;

const zustandStore = create<StoreState>()(
  devtools((...rest) => ({
    ...authSlice(...rest),
    ...createPlanSlice(...rest),
    ...createCartSlice(...rest),
    ...createRegisterSlice(...rest),
  })),
);

export default zustandStore;
