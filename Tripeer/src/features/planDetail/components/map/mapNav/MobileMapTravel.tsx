import zustandStore from '../../../../../store/store';
import PlaceContent from './placeList/PlaceListContent';

export default function MobileMapTravel() {
  const userInfo = zustandStore((state) => state.room_userInfo);
  const clickedMember = userInfo.map((user) => ({ ...user, isClicked: true }));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <PlaceContent clickedMember={clickedMember} />
    </div>
  );
}
