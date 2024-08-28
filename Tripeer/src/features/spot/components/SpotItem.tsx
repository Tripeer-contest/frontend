import SpotHeader from './SpotHeader';
import SpotLine from './SpotLine';
import SpotMap from './SpotMap';
import SpotPosting from './SpotPosting';
import SpotReview from './SpotReview';
import SpotShortInfo from './SpotShortInfo';

export default function SpotItem() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <SpotHeader />
      <SpotShortInfo />
      <SpotLine />
      <SpotMap />
      <SpotLine />
      <SpotPosting />
      <SpotLine />
      <SpotReview />
    </main>
  );
}
