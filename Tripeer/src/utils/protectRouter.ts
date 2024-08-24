import { redirect } from 'react-router-dom';
import cookie from 'js-cookie';
const protectRouter = () => {
  return () => {
    const token = cookie.get('Authorization');
    if (!token) {
      return redirect('/');
    }
    return null;
  };
};

export default protectRouter;
