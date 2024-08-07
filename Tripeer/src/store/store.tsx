import { create } from 'zustand';
import { authSlice } from './auth/AuthStore';
import { AuthState } from './auth/AuthType';

type StoreState = AuthState;

const zustandStore = create<StoreState>()((...rest) => ({
  ...authSlice(...rest),
}));

export default zustandStore;
