import ContentLayout from '../../layout/ContentLayout';
import DiarySummary from './components/DiarySummary';
import CardList from './components/CardList';
import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';

export default function DiaryDetailPage() {
  return (
    <ContentLayout>
      <DetailHeader></DetailHeader>
      <DetailContent>
        <DiarySummary />
        <CardList></CardList>
      </DetailContent>
    </ContentLayout>
  );
}
