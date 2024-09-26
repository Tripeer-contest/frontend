import { useState, ChangeEvent } from 'react';
import styles from '../modules/searchBar.module.css';
import searchImg from '../assets/search.png';
import backImg from '../assets/back.png';
import PlaceBox from './PlaceBox.tsx';
import usePlaceBox from '../hooks/usePlaceBox.tsx';
import useGetSearchData from '../hooks/useGetSearchData.tsx';
import useIntersectionScroll from '../../../hooks/useIntersectionScroll.tsx';
import useModal from '../../../hooks/useModal.tsx';

const SearchBar = () => {
  const { ModalLayout, close, open } = useModal();
  const [keyword, setKeyword] = useState('');
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useGetSearchData(keyword);
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const { clickHandler, likeClickHandler, rating } = usePlaceBox();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <div className={styles.inputBox} onClick={open}>
        <img src={searchImg} alt={'searchImg'} className={styles.searchImg} />
        <div className={styles.input}>여행지를 검색해보세요.</div>
      </div>
      <ModalLayout className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <img
            src={backImg}
            alt={'backBtnImage'}
            className={styles.backImg}
            onClick={close}
          />
          <p>여행지 검색</p>
        </div>
        <div className={styles.modalContentBox}>
          <div className={styles.modalSearchBar}>
            <img
              src={searchImg}
              alt={'searchImg'}
              className={styles.modalSearchImg}
            />
            <input
              className={styles.modalSearchInput}
              placeholder={'여행지를 검색해보세요'}
              onChange={handleInputChange}
              value={keyword}
            />
          </div>
        </div>
        <section className={styles.section}>
          <div className={styles.modalSearchList}>
            {!data || data?.pages?.[0]?.spotInfoDTOList.length === 0 ? (
              <p className={styles.noneData}>검색 결과가 없습니다.</p>
            ) : (
              <>
                <div className={styles.gridBox}>
                  {!isLoading &&
                    data &&
                    data.pages.map((page) =>
                      page.spotInfoDTOList.map((place: any) => (
                        <div key={place.spotId} className={styles.cardBox}>
                          <PlaceBox
                            place={place}
                            clickHandler={() => clickHandler(place.spotId)}
                            likeClickHandler={likeClickHandler}
                            rating={rating}
                          />
                        </div>
                      )),
                    )}
                </div>
                {!isLoading && hasNextPage && data?.pages.length && (
                  <li className={styles.ballBox} ref={setRef}>
                    <div className={styles.ball} />
                    <div className={styles.ball} />
                    <div className={styles.ball} />
                  </li>
                )}
              </>
            )}
          </div>
        </section>
      </ModalLayout>
    </>
  );
};

export default SearchBar;
