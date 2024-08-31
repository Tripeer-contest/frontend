import { Fragment } from 'react/jsx-runtime';
import { UserType } from '../../../../types/UserTypes';
import styles from '../../assets/chat/invite.module.css';

export default function MemberSearchResult({
  isLoading,
  isError,
  data,
}: {
  isLoading: boolean;
  isError: boolean;
  data: { data: UserType[] } | undefined;
}) {
  return (
    <>
      {isLoading ? (
        <div className={styles.noResult}>
          <div className={styles.spinner} />
        </div>
      ) : (
        <>
          {isError || !data || data.data.length === 0 ? (
            <div className={styles.noResult}>
              <p>검색 결과가 없습니다.</p>
            </div>
          ) : (
            <div className={styles.searchResult}>
              {data.data.map((user) => (
                <Fragment key={user.userId}>
                  <>
                    <div className={styles.userBox}>
                      <div className={styles.profileBox}>
                        <img
                          src={user.profileImage}
                          alt="profile-img"
                          className={styles.profile}
                        />
                      </div>
                      <p>{user.nickname}</p>
                      <button className={styles.invite}>초대</button>
                    </div>
                    <div className={styles.line} />
                  </>
                </Fragment>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
