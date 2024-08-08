export interface AuthState {
  token: string;
  setToken: (payload: string) => void;
  clearToken: () => void;
}
