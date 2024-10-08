import { useNavigate } from 'react-router-dom';
import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import styles from './contact.module.css';
import { useRef, useState } from 'react';
import Notify from '../planDetail/components/notify/Notify';
import warningImg from '../../assets/error/warn.svg';
import { postContact } from './api/postContact';

export default function ContactPage() {
  const navigate = useNavigate();
  const [isCheckEmail, setCheckEmail] = useState(false);
  const [isCheckTitle, setCheckTitle] = useState(false);
  const [isCheckContent, setCheckContent] = useState(false);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const titleRef = useRef<null | HTMLInputElement>(null);
  const contentRef = useRef<null | HTMLTextAreaElement>(null);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const showTemporaryNotify = (
    setNotifyState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setNotifyState(true);
    setTimeout(() => {
      setNotifyState(false);
    }, 3000);
  };
  const handleSubmit = async () => {
    const email = emailRef.current?.value || '';
    const title = titleRef.current?.value || '';
    const content = contentRef.current?.value || '';

    let isValid = true;

    if (!validateEmail(email)) {
      showTemporaryNotify(setCheckEmail);
      isValid = false;
    }

    if (title.trim() === '') {
      showTemporaryNotify(setCheckTitle);
      isValid = false;
    }

    if (content.trim() === '') {
      showTemporaryNotify(setCheckContent);
      isValid = false;
    }

    if (isValid) {
      try {
        await postContact(email, title, content);
        console.log('Form submitted:', { email, title, content });
        navigate(-1);
      } catch {
        setIsError(true);
      }
    }
  };
  return (
    <BoxLayout>
      <ContentLayout>
        <main className={styles.container}>
          <section>
            <h2 className={styles.h2}>CONTACT US</h2>
            <h1 className={styles.h1}>문의하기</h1>
            <h3 className={styles.h3}>
              트리피어의 문의 및 기술 지원이 필요한 경우 문의주세요.
            </h3>
          </section>
          <section className={styles.formSection}>
            <div className={styles.formContainer}>
              <p className={styles.formText}>이메일</p>
              <input
                className={styles.formBox}
                type="text"
                maxLength={30}
                placeholder="이메일 형식에 맞게 작성해주세요."
                ref={emailRef}
              />
            </div>
            <div className={styles.formContainer}>
              <p className={styles.formText}>제목</p>
              <input
                className={styles.formBox}
                type="text"
                maxLength={30}
                placeholder="제목을 작성해주세요.(30자 이내)"
                ref={titleRef}
              />
            </div>
            <div className={styles.formContainer}>
              <p className={styles.formText}>문의 내용</p>
              <textarea
                className={styles.formContentBox}
                maxLength={500}
                placeholder="내용을 작성해주세요.(500자 이내)"
                ref={contentRef}
              />
            </div>
          </section>
          <div className={styles.btnBox}>
            <div
              className={styles.cancelBtn}
              onClick={() => {
                navigate(-1);
              }}
            >
              취소
            </div>
            <div className={styles.confirmBtn} onClick={handleSubmit}>
              작성 완료
            </div>
          </div>
        </main>
        <Notify
          isActive={isCheckEmail}
          message="이메일을 올바르게 작성해주세요."
          title={'경고'}
          img={warningImg}
        />
        <Notify
          isActive={isCheckTitle}
          message="제목을 올바르게 작성해주세요."
          title={'경고'}
          img={warningImg}
        />
        <Notify
          isActive={isCheckContent}
          message="문의내용을 올바르게 작성해주세요."
          title={'경고'}
          img={warningImg}
        />
        <Notify
          isActive={isError}
          message="네트워크 상태가 불안정하여 리뷰 작성을 실패하였습니다."
          title={'경고'}
          img={warningImg}
        />
      </ContentLayout>
    </BoxLayout>
  );
}
