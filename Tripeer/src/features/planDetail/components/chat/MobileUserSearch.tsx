import { ChangeEvent, useState } from 'react';
import SearchBar from '../../../../components/search/SearchBar';
import backIcon from '../../../../assets/button/back.svg';
import styles from '../../assets/chat/mobile.module.css';
import { useGetSlowUserQuery } from '../../hooks/useGetUserQuery';
import MemberSearchResult from './MemberSearchResult';

export default function MobileUserSearch({ setMode }: { setMode: () => void }) {
  const [keyword, setKeyword] = useState('');
  const { data, isError, isLoading } = useGetSlowUserQuery(keyword);

  const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <>
      <header className={styles.searchBox}>
        <img src={backIcon} alt="back-icon" onClick={setMode} />
        <SearchBar
          text={keyword}
          textHandler={textHandler}
          placeholder="초대할 유저를 검색하세요."
          style={{ height: '40px', width: '280px' }}
        />
      </header>
      <div style={{ display: 'flex', overflowY: 'scroll' }}>
        <MemberSearchResult
          data={data}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
