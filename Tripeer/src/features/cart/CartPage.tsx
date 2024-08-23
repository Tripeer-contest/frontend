import BoxLayout from '../../layout/BoxLayout';
import CartBody from './components/CartBody';
import CartHeader from './components/CartHeader';
import useWishItem from './hooks/useWishItem';

export default function CartPage() {
  useWishItem();
  return (
    <BoxLayout>
      <CartHeader />
      <CartBody />
    </BoxLayout>
  );
}
