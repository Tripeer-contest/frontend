import { ChangeEvent, useState } from 'react';
import useMyInfoQuery from '../hooks/useMyInfoQuery';
import config_icon from '../../../assets/button/config.svg';
import styles from '../assets/config.module.css';

type imageObject = {
  imageURL: string;
  imageBase64: null | File;
};

export default function ConfigImage() {
  const { data } = useMyInfoQuery();
  const [profileImg, setProfileImg] = useState<imageObject>({
    imageURL: data.profileImage,
    imageBase64: null,
  });

  const configImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      const change = files[0];
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target?.result) {
          setProfileImg({
            imageURL: e.target?.result.toString(),
            imageBase64: change,
          });
        }
      };
      fileReader.readAsDataURL(change);
    }
  };
  return (
    <div className={styles.imgBox}>
      <div className={styles.profileImg}>
        <img
          src={profileImg.imageURL}
          alt="profile-img"
          className={styles.profileImg}
        />
        <input
          type="file"
          style={{ display: 'none' }}
          id="profile-file"
          accept="image/*"
          onChange={configImage}
        />
        <label htmlFor="profile-file" className={styles.configImg}>
          <img src={config_icon} alt="config-icon" />
        </label>
      </div>
    </div>
  );
}
