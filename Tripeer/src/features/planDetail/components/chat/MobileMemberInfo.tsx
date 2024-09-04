import { Fragment, useMemo, useState } from 'react';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/mobile.module.css';
import memberIcon from '../../assets/icon/member.svg';
import UserInfo from './UserInfo';
import addMemberIcon from '../../assets/icon/addMember.svg';
import MobileUserSearch from './MobileUserSearch';

export default function MobileMemberInfo() {
  const userInfo = zustandStore((state) => state.room_userInfo);
  const [isSearch, setIsSearch] = useState(false);
  const onlineMember = useMemo(() => {
    return userInfo.filter((user) => user.isOnline === true);
  }, [userInfo]);

  const offlineMember = useMemo(() => {
    return userInfo.filter((user) => user.isOnline === false);
  }, [userInfo]);
  return (
    <>
      {isSearch ? (
        <MobileUserSearch setMode={() => setIsSearch(false)} />
      ) : (
        <div className={styles.memberBox}>
          <header className={styles.header}>
            <div className={styles.iconBox}>
              <img src={memberIcon} alt="member-icon" />
              <p>{`${userInfo.length}명`}</p>
            </div>
          </header>
          {onlineMember.map((user, idx) => (
            <Fragment key={idx}>
              <UserInfo user={user} isOnline={true} />
            </Fragment>
          ))}
          {offlineMember.map((user) => (
            <Fragment key={user.userId}>
              <UserInfo user={user} isOnline={false} />
            </Fragment>
          ))}
          {userInfo.length < 6 && (
            <div className={styles.addBox} onClick={() => setIsSearch(true)}>
              <img src={addMemberIcon} alt="add-icon" />
              <p>멤버 추가</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
