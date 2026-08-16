import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import MyPageAside from './components/MyPageAside';
import NoticeContent from './components/NoticeContent';
import MyLayout from './layout/MyLayout';

export default function MyNotice() {
  return (
    <ContentLayout>
      <BoxLayout>
        <MyLayout>
          <MyPageAside
            title="공지사항"
            subTitle="NEWS & NOTICE"
            description="최신 소식을 공유드립니다."
          />
          <NoticeContent />
        </MyLayout>
      </BoxLayout>
    </ContentLayout>
  );
}
