import { useState } from 'react';

const usePlaceBox = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const likeClickHandler = () => {
    setIsLike(!isLike);
  };

  return { likeClickHandler, isLike };
};

export default usePlaceBox;
