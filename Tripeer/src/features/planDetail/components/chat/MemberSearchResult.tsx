import { Fragment } from 'react/jsx-runtime';
import { UserType } from '../../../../types/UserTypes';
import styles from '../../assets/chat/invite.module.css';
import useInviteQuery from '../../hooks/useInviteQuery';
import MutationLoading from '../../../../components/loading/MutationLoading';
import errorIcon from '../../../../assets/error/warn.svg';
import Notify from '../notify/Notify';
import TripeerIcon from '../../../../assets/tripeer_icon.webp';
import { useParams } from 'react-router-dom';

export default function MemberSearchResult({
  isLoading,
  isError,
  data,
}: {
  isLoading: boolean;
  isError: boolean;
  data: { data: UserType[] } | undefined;
}) {
  const params = useParams();
  const mutation = useInviteQuery();
  const sendInvite = (userId: number) => {
    if (params.id) {
      mutation.mutate({ planId: +params.id, userId: userId });
    }
  };
  return (
    <div
      style={{
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
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
                      <button
                        className={styles.invite}
                        onClick={() => sendInvite(user.userId)}
                      >
                        초대
                      </button>
                    </div>
                    <div className={styles.line} />
                  </>
                </Fragment>
              ))}
            </div>
          )}
        </>
      )}
      <MutationLoading isShow={mutation.isPending} />
      <Notify
        img={errorIcon}
        title="에러 메세지"
        message={mutation.error ? mutation.error.message : ''}
        isActive={mutation.isError}
      />
      <Notify
        img={TripeerIcon}
        title="초대 성공"
        message="초대 메시지를 발송을 성공했어요!"
        isActive={mutation.isSuccess}
      />
    </div>
  );
}
