import { SyntheticEvent } from 'react';

export const DEFAULT_IMG =
  'https://tripeer207.s3.ap-northeast-2.amazonaws.com/front/static/default1.png';

export const handleErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = DEFAULT_IMG;
};
