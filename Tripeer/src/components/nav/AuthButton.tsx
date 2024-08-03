// 내부 모듈
import LoginButton from './LoginButton';
import ProfileButton from './ProfileButton';

const isLogin = false;

export default function AuthButton() {
  return isLogin ? <ProfileButton /> : <LoginButton />;
}
