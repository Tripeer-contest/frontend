export interface CommonSliceState {
  scrollTo: ((offset: number) => void) | null;
  setScrollFn: (payload: (offset: number) => void) => void;
}
