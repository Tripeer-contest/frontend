import { create } from 'zustand';
import { authSlice } from './auth/AuthStore';
import { AuthState } from './auth/AuthType';
import { createPlanSlice } from './createPlan/CreatePlanStore';
import { createRegisterSlice } from './register/RegisterStore.tsx';
import { RegisterSlice } from './register/RegisterType.ts';
import { PlanState } from './createPlan/CreatePlan';
import { devtools } from 'zustand/middleware';

export type StoreState = AuthState & PlanState & RegisterSlice;

const zustandStore = create<StoreState>()(
  devtools((...rest) => ({
    ...authSlice(...rest),
    ...createPlanSlice(...rest),
    ...createRegisterSlice(...rest),
  })),
);

export default zustandStore;
