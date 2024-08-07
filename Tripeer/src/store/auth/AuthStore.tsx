// authSlice.ts
import { StateCreator } from 'zustand';
import { AuthState } from './AuthType';

// Auth slice 생성 함수
export const authSlice: StateCreator<AuthState> = (set) => ({
  token: '',
  setToken: (payload) => set(() => ({ token: payload })),
  clearToken: () => set(() => ({ token: '' })),
});
