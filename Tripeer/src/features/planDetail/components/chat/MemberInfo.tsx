import { Fragment, useMemo } from 'react';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/info.module.css';
import memberIcon from '../../assets/icon/member.svg';
import addMemberIcon from '../../assets/icon/addMember.svg';
import useModal from '../../../../hooks/useModal';
import MemberInvite from './MemberInvite';
import UserInfo from './UserInfo';

export default function MemberInfo() {
  const userInfo = zustandStore((state) => state.room_userInfo);
  const { ModalLayout, close, open } = useModal();

  const onlineMember = useMemo(() => {
    return userInfo.filter((user) => user.isOnline === true);
  }, [userInfo]);

  const offlineMember = useMemo(() => {
    return userInfo.filter((user) => user.isOnline === false);
  }, [userInfo]);
  return (
    <>
      <div className={styles.memberBox}>
        <header>
          <h3 className={styles.title}>멤버 목록</h3>
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
        {userInfo.length < 6 ? (
          <div className={styles.addBox} onClick={open}>
            <img src={addMemberIcon} alt="add-icon" />
            <p>멤버 추가</p>
          </div>
        ) : undefined}
      </div>
      <ModalLayout className={styles.modalContainer}>
        <MemberInvite close={close} />
      </ModalLayout>
    </>
  );
}
