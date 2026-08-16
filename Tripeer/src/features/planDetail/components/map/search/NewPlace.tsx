import cancel_icon from '../../../../../assets/button/cancel_black.svg';
import search_icon from '../../../../../assets/button/light_search.svg';
import useKakaoSearchQuery from '../../../hooks/useKakaoSearchQuery';
import point_icon from '../../../../../assets/button/newPoint.svg';
import plus_icon from '../../../../../assets/button/plusSpot.svg';
import { KeyboardEvent, useRef, useState } from 'react';
import useIntersectionScroll from '../../../../../hooks/useIntersectionScroll';
import styles from '../../../assets/map/header.module.css';
import direct_icon from '../../../../../assets/button/direct_gray.svg';
import check_icon from '../../../../../assets/button/check.svg';

export default function NewPlace({
  map,
  setMapRef,
  close,
}: {
  map: any;
  setMapRef: (elem: HTMLDivElement | null) => void;
  close: () => void;
}) {
  const [place, setPlace] = useState<any>(null);
  const [keyword, setKeyword] = useState('');
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [isNewSpot, setIsNewSpot] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useKakaoSearchQuery(keyword);
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputKeyword = inputRef.current ? inputRef.current.value : '';
    const result = inputKeyword.trim();
    if (result.length > 0 && e.key === 'Enter') {
      setKeyword(inputKeyword);
    }
  };
  const handleClick = () => {
    const inputKeyword = inputRef.current ? inputRef.current.value : '';
    const result = inputKeyword.trim();
    if (result.length > 0) {
      setKeyword(inputKeyword);
    }
  };
  const moveMap = (latitude: number, longitude: number) => {
    const mapLatLng = new window.kakao.maps.LatLng(latitude, longitude);
    map.panTo(mapLatLng);
  };

  const confirm = (result: any) => {
    setPlace(result);
  };

  return (
    <div className={styles.modalBox}>
      {!place && (
        <>
          <div className={styles.modaleHeader}>
            신규 장소 등록
            <img onClick={close} src={cancel_icon} alt="cancel-icon" />
          </div>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="신규 장소를 검색하세요"
              ref={inputRef}
              onKeyUp={handleKey}
            />
            <img src={search_icon} alt="search-icon" onClick={handleClick} />
          </div>
          <div className={styles.modalMap} ref={setMapRef} />
          <div className={styles.searchResult}>
            {!data && (
              <p className={styles.emptyResult}>검색 결과가 없습니다.</p>
            )}
            {data && data?.pages[0].documents.length === 0 && (
              <p className={styles.emptyResult}>검색 결과가 없습니다.</p>
            )}
            {data &&
              data.pages[0].documents.length > 0 &&
              data.pages.map((page) =>
                page.documents.map((spot: any) => (
                  <div key={spot.id}>
                    <div
                      className={styles.placeSection}
                      onClick={() => moveMap(spot.y, spot.x)}
                    >
                      <div className={styles.sectionInfo}>
                        <img src={point_icon} alt="point-icon" />
                        <div className={styles.infoContent}>
                          <div className={styles.cardTitle}>
                            {spot['place_name']}
                          </div>
                          <div className={styles.cardPlace}>
                            {spot['address_name']}
                          </div>
                        </div>
                      </div>
                      <img
                        src={plus_icon}
                        alt="plus-icon"
                        className={styles.plus}
                        onClick={(e) => {
                          e.stopPropagation();
                          confirm(spot);
                        }}
                      />
                    </div>
                    <hr className={styles.sectionLine} />
                  </div>
                )),
              )}
            {data && data.pages.length > 0 && hasNextPage && !isLoading && (
              <li className={styles.ballBox} ref={setRef}>
                <div className={styles.ball} />
                <div className={styles.ball} />
                <div className={styles.ball} />
              </li>
            )}
          </div>
        </>
      )}
      {place && (
        <>
          <div className={styles.modaleHeader}>
            신규 장소 등록
            <div className={styles.backSection} onClick={() => setPlace(null)}>
              <img src={direct_icon} alt="direct-icon" />
              <span>뒤로</span>
            </div>
          </div>
          <div className={styles.confirmBox}>
            <div className={styles.selectSection}>
              <p>선택 장소</p>
              <div className={styles.selectLine} />
              <div className={styles.selectInfoBox}>
                <p>{place['place_name']}</p>
                <p>{place['address_name']}</p>
              </div>
            </div>
            <div className={styles.selectSection}>
              <p>선택 분류</p>
              <div className={styles.selectLine} />
              <div
                className={styles.selectCheckBox}
                onClick={() => setCategoryIdx(0)}
              >
                <div className={styles.checkBox}>
                  {categoryIdx === 0 && <div className={styles.checked} />}
                </div>
                맛집
              </div>
              <div
                className={styles.selectCheckBox}
                onClick={() => setCategoryIdx(1)}
              >
                <div className={styles.checkBox}>
                  {categoryIdx === 1 && <div className={styles.checked} />}
                </div>
                숙박
              </div>
              <div
                className={styles.selectCheckBox}
                onClick={() => setCategoryIdx(2)}
              >
                <div className={styles.checkBox}>
                  {categoryIdx === 2 && <div className={styles.checked} />}
                </div>
                명소
              </div>
            </div>
            <div
              className={styles.isAddSpotBox}
              onClick={() => setIsNewSpot((prev) => !prev)}
            >
              <div className={styles.isAddCheckBox}>
                {isNewSpot && (
                  <img
                    className={styles.check}
                    src={check_icon}
                    alt="check-icon"
                  />
                )}
              </div>
              해당 장소 등록후, 여행계획에도 추가하시겠습니까?
            </div>
            <div className={styles.btnBox}>
              <div
                onClick={() => {
                  setPlace(null);
                  close();
                }}
              >
                취소
              </div>
              <div>확인</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
