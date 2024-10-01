import styles from '../login.module.css';
import { SocialPlatform } from '../data/social';

export default function SocialButton({ social }: { social: string }) {
  const socialservice = SocialPlatform[social]
    ? SocialPlatform[social]
    : SocialPlatform['apple'];
  return (
    <a
      href={socialservice.href}
      style={socialservice.style}
      className={styles.socialBtn}
    >
      <img
        src={socialservice.img}
        alt="social-service"
        className={styles.socialImg}
      />
      <p className={social === 'google' ? styles.googleFont : ''}>
        {socialservice.text}
      </p>
    </a>
  );
}
