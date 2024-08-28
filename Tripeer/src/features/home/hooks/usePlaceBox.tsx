import { useState } from 'react';

const usePlaceBox = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(4.5);

  const likeClickHandler = () => {
    setIsLike(!isLike);
  };

  return { likeClickHandler, isLike, rating, setRating };
};

export default usePlaceBox;
