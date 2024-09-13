import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import MyPageAside from './components/MyPageAside';
import MyQnaPage from './components/MyQnaPage';
import MyLayout from './layout/MyLayout';

export default function MyQna() {
  return (
    <ContentLayout>
      <BoxLayout>
        <MyLayout>
          <MyPageAside
            title="문의하기"
            subTitle="CONTACT US"
            description="트리피어의 문의 및 기술지원이 필요한 경우 문의주세요."
          />
          <MyQnaPage />
        </MyLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
