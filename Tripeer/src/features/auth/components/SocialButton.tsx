import styles from '../login.module.css';
import { SocialPlatform } from '../data/social';

export default function SocialButton({ social }: { social: string }) {
  const socialservice = SocialPlatform[social]
    ? SocialPlatform[social]
    : SocialPlatform['apple'];
  const btnStyle =
    social === 'apple'
      ? { ...socialservice.style, ...{ gap: '2px' } }
      : socialservice.style;
  return (
    <a href={socialservice.href} style={btnStyle} className={styles.socialBtn}>
      <img
        style={social === 'apple' ? { height: '100%' } : undefined}
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
