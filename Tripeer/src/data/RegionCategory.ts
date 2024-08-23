import 강원 from '../assets/region/강원.png';
import 경기 from '../assets/region/경기.png';
import 경남 from '../assets/region/경남.png';
import 경북 from '../assets/region/경북.png';
import 광주 from '../assets/region/광주.png';
import 대구 from '../assets/region/대구.png';
import 대전 from '../assets/region/대전.png';
import 부산 from '../assets/region/부산.png';
import 서울 from '../assets/region/서울.png';
import 세종 from '../assets/region/세종.png';
import 울산 from '../assets/region/울산.png';
import 인천 from '../assets/region/인천.png';
import 전남 from '../assets/region/전남.png';
import 전북 from '../assets/region/전북.png';
import 전체 from '../assets/region/전체.png';
import 제주 from '../assets/region/제주.png';
import 충남 from '../assets/region/충남.png';
import 충북 from '../assets/region/충북.png';

export const Region = [
  { name: '전체', cityId: 0, townId: -1, img: 전체 },
  { name: '서울', cityId: 1, townId: -1, img: 서울 },
  { name: '인천', cityId: 2, townId: -1, img: 인천 },
  { name: '대전', cityId: 3, townId: -1, img: 대전 },
  { name: '대구', cityId: 4, townId: -1, img: 대구 },
  { name: '광주', cityId: 5, townId: -1, img: 광주 },
  { name: '부산', cityId: 6, townId: -1, img: 부산 },
  { name: '울산', cityId: 7, townId: -1, img: 울산 },
  { name: '세종특별자치시', cityId: 8, townId: -1, img: 세종 },
  { name: '경기도', cityId: 31, townId: -1, img: 경기 },
  { name: '강원도', cityId: 32, townId: -1, img: 강원 },
  { name: '충청북도', cityId: 33, townId: -1, img: 충북 },
  { name: '충청남도', cityId: 34, townId: -1, img: 충남 },
  { name: '경상북도', cityId: 35, townId: -1, img: 경북 },
  { name: '경상남도', cityId: 36, townId: -1, img: 경남 },
  { name: '전라북도', cityId: 37, townId: -1, img: 전북 },
  { name: '전라남도', cityId: 38, townId: -1, img: 전남 },
  { name: '제주도', cityId: 39, townId: -1, img: 제주 },
];

export function RegionFilter(items: { cityId: number }[] | undefined) {
  if (!items) return [];
  const filteredRegion = Region.filter((region) =>
    items.find((item) => item.cityId === region.cityId),
  );
  return filteredRegion.length > 0
    ? [{ name: '전체', cityId: 0, townId: -1, img: 전체 }, ...filteredRegion]
    : filteredRegion;
}
