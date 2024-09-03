import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postWish } from '../api/postWish.ts';

const usePlaceBox = (wishlist: boolean, spotId: number) => {
  const [isLike, setIsLike] = useState<boolean>(wishlist);
  const [rating, setRating] = useState<number>(4.5);

  const clickHandler = () => {};

  const likeClickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    mutation.mutate({ spotId, isLike });
    setIsLike(!isLike);
  };

  const mutation = useMutation({
    mutationFn: postWish,
    onSuccess: () => {},
    onError: () => {},
  });

  return { clickHandler, likeClickHandler, isLike, rating, setRating };
};

export default usePlaceBox;
