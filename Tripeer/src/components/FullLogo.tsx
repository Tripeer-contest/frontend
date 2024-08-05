// 내부 모듈
import Logo from '../assets/logo.webp';

// 외부 모듈
import { Link } from 'react-router-dom';

export default function FullLogo({ width = 130, height = 50 }) {
  return (
    <Link to="/">
      <img
        src={Logo}
        alt="Tripeer Logo"
        style={{
          width: width,
          height: height,
        }}
      />
    </Link>
  );
}
