import CartBody from './components/CartBody';
import CartHeader from './components/CartHeader';
import CartLayout from './layout/CartLayout';
import useWishItem from './hooks/useWishItem';

export default function CartPage() {
  useWishItem();
  return (
    <CartLayout>
      <CartHeader />
      <CartBody />
    </CartLayout>
  );
}
