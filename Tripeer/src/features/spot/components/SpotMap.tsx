import { useEffect } from 'react';
import useMap from '../../../hooks/useMap';
import styles from '../assets/map.module.css';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import useClipBoard from '../../../hooks/useClipBoard';

interface SpotMapInterface {
  latitude: number;
  longitude: number;
  addr1: string;
}

const queryCallback = (data: any) => ({
  addr1: data.data.addr1,
  latitude: data.data.latitude,
  longitude: data.data.longitude,
});

export default function SpotMap({ id }: { id: number }) {
  const { setMapRef, map } = useMap();
  const { data } = useSpotDetailQuery<SpotMapInterface>(id, queryCallback);
  const { isClip, saveClipBoard } = useClipBoard(data.addr1);

  const showClipConfirm = () => {
    return isClip ? styles.clipConfirm : styles.disappear;
  };

  useEffect(() => {
    if (map && data) {
      const position = new naver.maps.LatLng(data.latitude, data.longitude);
      const marker = new naver.maps.Marker({
        position: position,
        icon: {
          url: 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/pin.png',
          scaledSize: { width: 30, height: 40 },
        },
      });
      map.setCenter(position);
      marker.setMap(map);
    }
  }, [map, data]);

  return (
    <>
      <p className={showClipConfirm()}>클립보드에 복사가 완료되었습니다.</p>
      <section className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>장소 정보</h3>
          <p className={styles.updateBtn}>정보 업데이트</p>
        </div>
        <div className={styles.mapBox}>
          <div className={styles.map} ref={setMapRef}></div>
          <div className={styles.mapInfo}>
            <p className={styles.info}>{data.addr1} </p>
            <p className={styles.func} onClick={saveClipBoard}>
              주소 복사
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
