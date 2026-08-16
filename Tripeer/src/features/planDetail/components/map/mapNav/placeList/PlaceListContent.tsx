import { Fragment } from 'react/jsx-runtime';
import zustandStore from '../../../../../../store/store';
import styles from '../../../../assets/map/mapNav/placeListContent.module.css';
import PlaceListCard from './PlaceListCard';

interface clickedInterface {
  isClicked: boolean;
  isOnline: boolean;
  nickname: string;
  profileImage: string;
  userId: number;
  order: number;
}
export default function PlaceContent({
  clickedMember,
}: {
  clickedMember: clickedInterface[];
}) {
  const spotList = zustandStore((state) => state.room_spotList);
  const showList = spotList.filter((spot) => {
    const userId = spot.userId;
    const idx = clickedMember.findIndex(
      (user) => user.userId === userId && user.isClicked,
    );
    return idx !== -1;
  });
  return (
    <div className={styles.container}>
      {showList.map((spot) => (
        <Fragment key={spot.spotInfoId}>
          <PlaceListCard spotInfo={spot} />
        </Fragment>
      ))}
      {showList.length === 0 && (
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          아직 계획한 장소가 없습니다.
        </div>
      )}
    </div>
  );
}
