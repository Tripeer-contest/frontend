import CommonLoading from '../../components/loading/CommonLoading';
import CartBody from './components/CartBody';
import CartHeader from './components/CartHeader';
import CartLayout from './layout/CartLayout';

export default function CartPage() {
  return (
    <>
      <CommonLoading />
      <CartLayout>
        <CartHeader />
        <CartBody />
      </CartLayout>
    </>
  );
}
