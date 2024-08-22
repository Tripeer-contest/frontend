import styles from './registerPage.module.css';
import { useEffect, useState } from 'react';
import RegisterLoading from './components/RegisterLoading.tsx';
import RegisterNickname from './components/RegisterNickname.tsx';
import RegisterBirthday from './components/RegisterBirthday.tsx';
import RegisterStyle from './components/RegisterStyle.tsx';
import zustandStore from '../../store/store.tsx';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const r_pageNumber = zustandStore((state) => state.r_pageNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const pageList = [
    <RegisterNickname key={'nickname'} />,
    <RegisterBirthday key={'birthday'} />,
    <RegisterStyle key={'style'} />,
  ];

  return (
    <div className={styles.container}>
      {isLoading ? <RegisterLoading /> : pageList[r_pageNumber]}
    </div>
  );
}
