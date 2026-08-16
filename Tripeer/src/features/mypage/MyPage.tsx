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
          <MyPageAside
            description="만나서 반갑습니다. 회원님"
            title="마이 페이지"
            subTitle="MY PAGE"
          />
          <MyPageMenu />
        </MyLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
