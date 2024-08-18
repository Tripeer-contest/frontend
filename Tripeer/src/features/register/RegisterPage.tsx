import { useEffect, useState } from 'react';
import RegisterLoading from './components/RegisterLoading.tsx';
import RegisterNickname from './components/RegisterNickname.tsx';
import RegisterBirthday from './components/RegisterBirthday.tsx';
import RegisterStyle from './components/RegisterStyle.tsx';
import { useNavigate } from 'react-router-dom';
import styles from './registerPage.module.css';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [nickname, setNickname] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (pageNumber > 2) {
      navigate('/redirect');
    } else if (pageNumber < 0) {
      navigate('/');
    }
  }, [pageNumber, navigate]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RegisterLoading />
      ) : pageNumber === 0 ? (
        <RegisterNickname
          page={pageNumber}
          setPage={setPageNumber}
          setNickname={setNickname}
        />
      ) : pageNumber === 1 ? (
        <RegisterBirthday nickname={nickname} />
      ) : pageNumber === 2 ? (
        <RegisterStyle />
      ) : (
        ''
      )}
    </div>
  );
}
