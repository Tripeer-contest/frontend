import { useMemo } from 'react';
import styles from '../../assets/chat/user.module.css';
import { UserType } from '../../../../types/UserTypes';
import { handleErrorImg } from '../../../../data/defaultImg';

export default function UserInfo({
  user,
  isOnline,
}: {
  user: UserType;
  isOnline?: boolean;
}) {
  const showOnline = useMemo(() => {
    let online = undefined;
    if (isOnline !== undefined) {
      online =
        isOnline === true ? (
          <div className={styles.green} />
        ) : (
          <div className={styles.gray} />
        );
    }

    return online;
  }, [isOnline]);
  return (
    <>
      <div className={styles.userBox}>
        <div className={styles.profileBox}>
          <img
            src={user.profileImage}
            alt="profile-img"
            className={styles.profile}
            onError={handleErrorImg}
          />
          {showOnline}
        </div>
        <p>{user.nickname}</p>
      </div>
      <div className={styles.line} />
    </>
  );
}
