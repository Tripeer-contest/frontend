import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import SpotItem from './components/SpotItem';

export default function SpotPage() {
  return (
    <>
      <BoxLayout>
        <ContentLayout>
          <SpotItem />
        </ContentLayout>
      </BoxLayout>
    </>
  );
}
