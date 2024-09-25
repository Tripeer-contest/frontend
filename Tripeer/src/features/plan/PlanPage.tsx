import PlanHeader from './components/PlanHeader';
import PlanItems from './components/PlanItems';
import PageLayout from './layout/PageLayout';
import ContentLayout from '../../layout/ContentLayout';
import BoxLayout from '../../layout/BoxLayout';

export default function PlanPage() {
  return (
    <ContentLayout>
      <BoxLayout>
        <PageLayout>
          <PlanHeader />
          <PlanItems />
        </PageLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
