import { useRef } from 'react';
import SpotHeader from './SpotHeader';
import SpotLine from './SpotLine';
import SpotMap from './SpotMap';
import SpotPosting from './SpotPosting';
import SpotShortInfo from './SpotShortInfo';
import { SpotReview } from './SpotReview';
import zustandStore from '../../../store/store';
import SpotSimular from './SpotSimular';
import SpotMeta from './SpotMeta';
import useParamsId from '../hooks/useParamsId';

export default function SpotItem() {
  const scrollTo = zustandStore((state) => state.scrollTo);
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const scrollToReview = () => {
    if (reviewRef.current && scrollTo)
      scrollTo(reviewRef.current.offsetTop - 100);
  };
  const id = useParamsId();

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <SpotHeader isPrevPage={true} id={id} />
      <SpotShortInfo scrollToReview={scrollToReview} id={id} mode={true} />
      <SpotLine />
      <SpotMap id={id} />
      <SpotLine />
      <SpotReview
        ref={reviewRef}
        scrollToReview={scrollToReview}
        id={id}
        mode={true}
      />
      <SpotMeta id={id} />
      <SpotSimular id={id} />
      <SpotPosting id={id} />
      <br />
    </main>
  );
}
