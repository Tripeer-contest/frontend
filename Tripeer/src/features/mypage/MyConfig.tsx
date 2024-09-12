import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import MyConfigMenu from './components/MyConfigMenu';
import MyPageAside from './components/MyPageAside';
import MyLayout from './layout/MyLayout';

export default function MyConfig() {
  return (
    <ContentLayout>
      <BoxLayout>
        <MyLayout>
          <MyPageAside
            title="내 정보 수정"
            subTitle="EDIT PROFILE"
            description="정보를 수정할 수 있습니다."
          />
          <MyConfigMenu />
        </MyLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
