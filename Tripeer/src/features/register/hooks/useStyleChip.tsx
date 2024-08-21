import zustandStore from '../../../store/store.tsx';

const useStyleChip = () => {
  const { r_style, r_setStyle } = zustandStore();

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
