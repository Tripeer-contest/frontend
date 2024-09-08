import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import MyPageAside from './components/MyPageAside';
import MyPageMenu from './components/MyPageMenu';
import MyLayout from './layout/MyLayout';

export default function MyPage() {
  return (
    <ContentLayout>
      <BoxLayout>
        <MyLayout>
          <MyPageAside />
          <MyPageMenu />
        </MyLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
