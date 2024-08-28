import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import SpotItem from './components/SpotItem';

export default function SpotPage() {
  return (
    <>
      <ContentLayout>
        <BoxLayout>
          <SpotItem />
        </BoxLayout>
      </ContentLayout>
    </>
  );
}
