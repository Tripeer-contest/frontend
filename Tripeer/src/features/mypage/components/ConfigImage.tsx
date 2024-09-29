import { ChangeEvent } from 'react';
import useMyInfoQuery, { usePatchImage } from '../hooks/useMyInfoQuery';
import config_icon from '../../../assets/button/config.svg';
import styles from '../assets/config.module.css';
import MutationLoading from '../../../components/loading/MutationLoading';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import { handleErrorImg } from '../../../data/defaultImg';

export default function ConfigImage() {
  const { data } = useMyInfoQuery();
  const { mutate, isError, isPending } = usePatchImage();

  const configImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      const change = files[0];
      mutate(change);
    }
  };
  return (
    <>
      <div className={styles.imgBox}>
        <div className={styles.profileImg}>
          <img
            src={data.profileImage}
            alt="profile-img"
            className={styles.profileImg}
            onError={handleErrorImg}
          />
          <input
            type="file"
            style={{ display: 'none' }}
            id="profile-file"
            accept=".jpg, .jpeg, .png"
            onChange={configImage}
          />
          <label htmlFor="profile-file" className={styles.configImg}>
            <img src={config_icon} alt="config-icon" />
          </label>
        </div>
      </div>
      <MutationLoading isShow={isPending} />
      <Notify
        isActive={isError}
        message={'파일을 로드중 오류가 발생하였습니다.'}
        title="알림"
        img={warn_icon}
      />
    </>
  );
}
