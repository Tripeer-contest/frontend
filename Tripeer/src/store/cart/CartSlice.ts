export interface CartState {
  cart_selectCategory: number;
  cart_init: () => void;
  cart_setCategory: (idx: number) => void;
}
