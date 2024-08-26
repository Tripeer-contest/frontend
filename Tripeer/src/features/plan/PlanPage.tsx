import { Suspense } from 'react';
import PlanHeader from './components/PlanHeader';
import PlanItems from './components/PlanItems';
import PageLayout from './layout/PageLayout';
import ErrorBoundary from '../../components/error/ErrorBoundary';
import CommonLoading from '../../components/loading/CommonLoading';
import ContentLayout from '../../layout/ContentLayout';
import BoxLayout from '../../layout/BoxLayout';

export default function PlanPage() {
  return (
    <ErrorBoundary fallback={<p>에러발생</p>}>
      <Suspense fallback={<CommonLoading />}>
        <ContentLayout>
          <BoxLayout>
            <PageLayout>
              <PlanHeader />
              <PlanItems />
            </PageLayout>
          </BoxLayout>
        </ContentLayout>
      </Suspense>
    </ErrorBoundary>
  );
}
