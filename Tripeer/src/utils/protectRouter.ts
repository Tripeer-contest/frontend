import { redirect } from 'react-router-dom';
import zustandStore from '../store/store';

const protectRouter = () => {
  return () => {
    const token = zustandStore.getState().token;
    if (!token) {
      return redirect('/login');
    }
    return null;
  };
};

export default protectRouter;
