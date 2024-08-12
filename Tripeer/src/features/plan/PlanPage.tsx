import { Suspense } from 'react';
import PlanHeader from './components/PlanHeader';
import PlanItems from './components/PlanItems';
import PageLayout from './layout/PageLayout';
import PlanLoading from './components/PlanLoading';
import ErrorBoundary from '../../components/error/ErrorBoundary';

export default function PlanPage() {
  return (
    <PageLayout>
      <ErrorBoundary fallback={<p>에러발생</p>}>
        <PlanHeader />
        <Suspense fallback={<PlanLoading />}>
          <PlanItems />
        </Suspense>
      </ErrorBoundary>
    </PageLayout>
  );
}
