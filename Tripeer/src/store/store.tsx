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
import { YSliceInterface } from './yobject/YObjecttype.ts';
import { YObjectSlice } from './yobject/yStore.tsx';
import { RoomSliceState } from './room/RoomSliceState.ts';
import { RoomSlice } from './room/RoomSlice.tsx';
import { CommonSliceState } from './common/CommonSliceState.ts';
import { CommonSlice } from './common/CommonSlice.tsx';
import { createHomeSlice } from './home/HomeStore.tsx';
import { HomeSlice } from './home/HomeType.ts';
import { DiarySlice, diarySliceState } from './diary/DiarySlice.tsx';
import { SpotSlice, SpotSliceInterface } from './spot/SpotSlice.tsx';
import { PlanCalendarSlice } from './planCalendar/PlanCalendarType.ts';
import { createPlanCalendarSlice } from './planCalendar/PlanCalendarStore.tsx';

export type StoreState = AuthState &
  PlanState &
  RegisterSlice &
  CartState &
  YSliceInterface &
  RoomSliceState &
  CommonSliceState &
  diarySliceState &
  HomeSlice &
  SpotSliceInterface &
  PlanCalendarSlice;

const zustandStore = create<StoreState>()(
  devtools((...rest) => ({
    ...authSlice(...rest),
    ...createPlanSlice(...rest),
    ...createCartSlice(...rest),
    ...createRegisterSlice(...rest),
    ...YObjectSlice(...rest),
    ...RoomSlice(...rest),
    ...CommonSlice(...rest),
    ...createHomeSlice(...rest),
    ...DiarySlice(...rest),
    ...SpotSlice(...rest),
    ...createPlanCalendarSlice(...rest),
  })),
);

export default zustandStore;
