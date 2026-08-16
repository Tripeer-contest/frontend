import { ChangeEvent, useState } from 'react';
import cancelIcon from '../../../../assets/button/cancel_gray.svg';
import SearchBar from '../../../../components/search/SearchBar';
import styles from '../../assets/chat/invite.module.css';
import { useGetSlowUserQuery } from '../../hooks/useGetUserQuery';
import MemberSearchResult from './MemberSearchResult';

export default function MemberInvite({ close }: { close: () => void }) {
  const [keyword, setKeyword] = useState('');
  const { data, isError, isLoading } = useGetSlowUserQuery(keyword);

  const closeHandler = () => {
    close();
    setKeyword('');
  };

  const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <>
      <div className={styles.cancel}>
        <img
          src={cancelIcon}
          alt="back-icon"
          style={{ cursor: 'pointer' }}
          onClick={closeHandler}
        />
      </div>
      <SearchBar
        text={keyword}
        textHandler={textHandler}
        placeholder="초대할 유저를 검색하세요."
        className={styles.bar}
      />
      <MemberSearchResult data={data} isError={isError} isLoading={isLoading} />
    </>
  );
}
