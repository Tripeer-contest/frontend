import google from '../../../assets/auth/google.svg';
import naver from '../../../assets/auth/naver.svg';
import kakao from '../../../assets/auth/kakao.svg';

const SocialPlatform = {
  google: {
    img: google,
    text: '구글로 시작하기',
    style: {
      backgroundColor: '#fff',
      border: '2px solid #EBEBEB',
      color: '#00000',
    },
    href: '/api/oauth2/authorization/google',
  },
  kakao: {
    img: kakao,
    text: '카카오로 시작하기',
    style: { backgroundColor: '#FFDE00' },
    href: '/api/oauth2/authorization/kakao',
  },
  naver: {
    img: naver,
    text: '네이버로 시작하기',
    style: { backgroundColor: '#00C73C', color: '#fff' },
    href: '/api/oauth2/authorization/naver',
  },
};

export { SocialPlatform };
