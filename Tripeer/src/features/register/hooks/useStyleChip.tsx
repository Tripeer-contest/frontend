import zustandStore from '../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const useStyleChip = () => {
  const [r_style, r_setStyle] = zustandStore(
    useShallow((state) => [state.r_style, state.r_setStyle]),
  );

  const onClickHandler = (idx: number) => {
    if (r_style.includes(idx + 1)) {
      r_setStyle(r_style.filter((item) => item !== idx + 1));
    } else {
      if (r_style.length < 3) {
        r_setStyle([...r_style, idx + 1]);
      }
    }
  };

  return { onClickHandler };
};

export default useStyleChip;