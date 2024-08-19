import CartBody from './components/CartBody';
import CartHeader from './components/CartHeader';
import CartLayout from './layout/CartLayout';

export default function CartPage() {
  return (
    <CartLayout>
      <CartHeader />
      <CartBody />
    </CartLayout>
  );
}
