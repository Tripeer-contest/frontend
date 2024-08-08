import { redirect } from 'react-router-dom';
import zustandStore from '../store/store';

const protectRouter = (store: typeof zustandStore) => {
  return () => {
    const token = store.getState().token;
    if (!token) {
      return redirect('/login');
    }
    return null;
  };
};

export default protectRouter;
