import styles from '../login.module.css';
import { SocialPlatform } from '../data/social';

export default function SocialButton({
  social,
}: {
  social: 'google' | 'naver' | 'kakao';
}) {
  const socialservice = SocialPlatform[social];
  return (
    <a href="" style={socialservice.style} className={styles.socialBtn}>
      <img
        src={socialservice.img}
        alt="social-service"
        className={styles.socialImg}
      />
      <p>{socialservice.text}</p>
    </a>
  );
}
