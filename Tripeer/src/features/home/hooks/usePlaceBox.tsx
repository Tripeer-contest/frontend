import { PlaceType } from '../../../types/PlaceType.ts';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postWish } from '../api/postWish.ts';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';

const usePlaceBox = (like: boolean, spotId: number) => {
  const [rating, setRating] = useState<number>(4.5);
  const [h_nowCityId, h_nowTownId, h_nowPlaceId] = zustandStore(
    useShallow((state) => [
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ]),
  );

  const client = useQueryClient();

  const cityId = h_nowCityId || -1;
  const townId = h_nowTownId || -1;
  const placeId = h_nowPlaceId || -1;

  const clickHandler = () => {};

  const likeClickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    mutation.mutate({ spotId, like });
  };

  const queryKey = ['getPlaceList', cityId, townId, placeId];

  const mutation = useMutation({
    mutationFn: postWish,
    onMutate: async () => {
      await client.cancelQueries({ queryKey: queryKey });
      const prev = client.getQueryData(queryKey);

      client.setQueryData(queryKey, (old: any) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            spotInfoDtos: page.spotInfoDtos.map((place: PlaceType) =>
              place.spotId === spotId
                ? { ...place, wishlist: !place.wishlist }
                : place,
            ),
          })),
        };
      });

      return { prev };
    },
    onError: (_, __, context) => {
      if (context?.prev) client.setQueryData(queryKey, context.prev);
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: queryKey }).then();
    },
  });

  return { clickHandler, likeClickHandler, rating, setRating };
};

export default usePlaceBox;
