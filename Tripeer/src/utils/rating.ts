import Rate0 from '../assets/rating/Ratings=0.svg';
import Rate0_5 from '../assets/rating/Ratings=O.5.svg';
import Rate1 from '../assets/rating/Ratings=1.svg';
import Rate1_5 from '../assets/rating/Ratings=1.5.svg';
import Rate2 from '../assets/rating/Ratings=2.svg';
import Rate2_5 from '../assets/rating/Ratings=2.5.svg';
import Rate3 from '../assets/rating/Ratings=3.svg';
import Rate3_5 from '../assets/rating/Ratings=3.5.svg';
import Rate4 from '../assets/rating/Ratings=4.svg';
import Rate4_5 from '../assets/rating/Ratings=4.5.svg';
import Rate5 from '../assets/rating/Ratings=5.svg';

export const getRateImg = (rate: number) => {
  if (rate < 0.5) return Rate0;
  if (rate < 1) return Rate0_5;
  if (rate < 1.5) return Rate1;
  if (rate < 2) return Rate1_5;
  if (rate < 2.5) return Rate2;
  if (rate < 3) return Rate2_5;
  if (rate < 3.5) return Rate3;
  if (rate < 4) return Rate3_5;
  if (rate < 4.5) return Rate4;
  if (rate < 5) return Rate4_5;
  return Rate5;
};
