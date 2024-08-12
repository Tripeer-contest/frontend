import { Suspense } from 'react';
import PlanHeader from './components/PlanHeader';
import PlanItems from './components/PlanItems';
import PageLayout from './layout/PageLayout';
import PlanLoading from './components/PlanLoading';

export default function PlanPage() {
  return (
    <PageLayout>
      <PlanHeader />
      <Suspense fallback={<PlanLoading />}>
        <PlanItems />
      </Suspense>
    </PageLayout>
  );
}
