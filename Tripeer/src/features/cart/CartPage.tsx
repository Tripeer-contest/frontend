import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import CartBody from './components/CartBody';
import CartHeader from './components/CartHeader';
import useWishItem from './hooks/useWishItem';

export default function CartPage() {
  useWishItem();
  return (
    <ContentLayout>
      <BoxLayout>
        <CartHeader />
        <CartBody />
      </BoxLayout>
    </ContentLayout>
  );
}
