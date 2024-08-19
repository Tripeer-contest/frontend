import { useEffect, useState } from 'react';
import RegisterLoading from './components/RegisterLoading.tsx';
import RegisterNickname from './components/RegisterNickname.tsx';
import RegisterBirthday from './components/RegisterBirthday.tsx';
import RegisterStyle from './components/RegisterStyle.tsx';
import { useNavigate } from 'react-router-dom';
import styles from './registerPage.module.css';
import zustandStore from '../../store/store.tsx';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [pageNumber, setPageNumber] = useState<number>(0);
  // const [nickname, setNickname] = useState<string>('');
  // const [year, setYear] = useState<string>('');
  // const [month, setMonth] = useState<string>('');
  // const [day, setDay] = useState<string>('');
  const navigate = useNavigate();

  const { r_pageNumber } = zustandStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (r_pageNumber > 2) {
      navigate('/redirect');
    } else if (r_pageNumber < 0) {
      navigate('/');
    }
  }, [r_pageNumber, navigate]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RegisterLoading />
      ) : r_pageNumber === 0 ? (
        <RegisterNickname />
      ) : r_pageNumber === 1 ? (
        <RegisterBirthday />
      ) : r_pageNumber === 2 ? (
        <RegisterStyle />
      ) : (
        ''
      )}
    </div>
  );
}
