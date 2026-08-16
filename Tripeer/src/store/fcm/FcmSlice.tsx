import { StateCreator } from 'zustand';
import { StoreState } from '../store';

const initialState = {
  FCM_isConnect: false,
};

export interface FcmState {
  FCM_isConnect: boolean;
  FCM_setIsConnect: (param: boolean) => void;
}

export const FcmSlice: StateCreator<
  StoreState, // 전체 스토어의 상태 타입
  [['zustand/devtools', never]], // 미들웨어의 타입(zustand documentation에 있습니다.)
  [], // persist state에 대한 타입
  FcmState // 지금 쓰여지는 슬라이스에 대한 타입
> = (set) => ({
  ...initialState,
  FCM_setIsConnect: (param) => set(() => ({ FCM_isConnect: param })),
});
