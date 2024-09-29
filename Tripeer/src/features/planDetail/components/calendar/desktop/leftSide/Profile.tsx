import styles from '../../../../assets/calendar/Desktop/leftSide/profile.module.css';
import { userColors } from '../../../../../../data/userColors.ts';
import { handleErrorImg } from '../../../../../../data/defaultImg.ts';

interface Props {
  image: string;
  order: number;
}

const Profile = ({ image, order }: Props) => {
  return (
    <img
      src={image}
      alt={'Profile Image'}
      className={styles.container}
      style={{ border: `3px solid ${userColors[order]}` }}
      onError={handleErrorImg}
    />
  );
};

export default Profile;
