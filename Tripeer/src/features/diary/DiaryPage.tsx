import DiaryLayout from './layout/DiaryLayout';
import DiaryHeader from './components/DiaryBanner';
import ContentLayout from '../../layout/ContentLayout';
import DiaryItem from './components/DiaryItem';
import BoxLayout from '../../layout/BoxLayout';
import useGetDiaryQuery from './hook/useGetDiaryList';

export default function DiaryPage() {
  const data = useGetDiaryQuery();
  console.log(data);
  return (
    <BoxLayout>
      <DiaryLayout>
        <DiaryHeader />
        <ContentLayout>
          <DiaryItem />
        </ContentLayout>
      </DiaryLayout>
    </BoxLayout>
  );
}
