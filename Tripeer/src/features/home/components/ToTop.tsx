import styles from '../modules/toTop.module.css';

interface Props {
  scrollHandler: () => void;
}

const ToTop = ({ scrollHandler }: Props) => {
  return (
    <div className={styles.container} onClick={scrollHandler}>
      Top
    </div>
  );
};

export default ToTop;
