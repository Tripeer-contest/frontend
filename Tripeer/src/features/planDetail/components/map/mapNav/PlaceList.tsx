import { useState } from 'react';
import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/mapNav/placeList.module.css';
import ListHeader from './ListHeader';
import MemberCategory from './placeList/MemberCategory';
import PlaceContent from './placeList/PlaceListContent';

export default function PlaceList() {
  const userInfo = zustandStore((state) => state.room_userInfo);
  const [clickedMember, setClickedMember] = useState(
    userInfo.map((user) => ({ ...user, isClicked: true })),
  );
  return (
    <div className={styles.container}>
      <ListHeader />
      <MemberCategory userInfo={clickedMember} setUserInfo={setClickedMember} />
      <PlaceContent />
    </div>
  );
}
