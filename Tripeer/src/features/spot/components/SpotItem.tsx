import { useRef } from 'react';
import SpotHeader from './SpotHeader';
import SpotLine from './SpotLine';
import SpotMap from './SpotMap';
import SpotPosting from './SpotPosting';
import SpotShortInfo from './SpotShortInfo';
import { SpotReview } from './SpotReview';
import zustandStore from '../../../store/store';
import SpotSimular from './SpotSimular';

export default function SpotItem() {
  const scrollTo = zustandStore((state) => state.scrollTo);
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const scrollToReview = () => {
    if (reviewRef.current && scrollTo) scrollTo(reviewRef.current.offsetTop);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <SpotHeader />
      <SpotShortInfo scrollToReview={scrollToReview} />
      <SpotLine />
      <SpotMap />
      <SpotLine />
      <SpotPosting />
      <SpotLine />
      <SpotReview ref={reviewRef} scrollToReview={scrollToReview} />
      <SpotSimular />
    </main>
  );
}
