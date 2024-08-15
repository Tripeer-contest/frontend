import { create } from 'zustand';
import { authSlice } from './auth/AuthStore';
import { AuthState } from './auth/AuthType';
import { createPlanSlice } from './createPlan/CreatePlanStore';
import { PlanState } from './createPlan/CreatePlan';
import { devtools } from 'zustand/middleware';

export type StoreState = AuthState & PlanState;

const zustandStore = create<StoreState>()(
  devtools((...rest) => ({
    ...authSlice(...rest),
    ...createPlanSlice(...rest),
  })),
);

export default zustandStore;
