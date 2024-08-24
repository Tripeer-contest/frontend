import { v4 as makeId } from 'uuid';
import tour from '../assets/banner/style/tourist.png';
import leisure from '../assets/banner/style/leisure.png';
import shop from '../assets/banner/style/shop.png';
import festival from '../assets/banner/style/festival.png';
import culture from '../assets/banner/style/culture.png';
import eat from '../assets/banner/style/eat.png';
import packageTravel from '../assets/banner/style/package.png';
import best from '../assets/banner/content/best.png';
import popular from '../assets/banner/content/popular.png';
import camping from '../assets/banner/content/camping.png';
import busan from '../assets/banner/region/busan.png';
import seoul from '../assets/banner/region/seoul.png';
import daegu from '../assets/banner/region/daegu.png';
import daejeon from '../assets/banner/region/daejeon.png';
import jeju from '../assets/banner/region/jeju.png';

const bannerData = [
  {
    id: makeId(),
    title: 'popular',
    img: popular,
  },
  {
    id: makeId(),
    title: 'best',
    img: best,
  },
  {
    id: makeId(),
    title: 'camp',
    img: camping,
  },
  {
    id: makeId(),
    title: '관광지',
    img: tour,
  },
  {
    id: makeId(),
    title: '레저스포츠',
    img: leisure,
  },
  {
    id: makeId(),
    title: '쇼핑',
    img: shop,
  },
  {
    id: makeId(),
    title: '축제',
    img: festival,
  },
  {
    id: makeId(),
    title: '문화',
    img: culture,
  },
  {
    id: makeId(),
    title: '맛집',
    img: eat,
  },
  {
    id: makeId(),
    title: '패키지',
    img: packageTravel,
  },
  {
    id: makeId(),
    title: '부산',
    img: busan,
  },
  {
    id: makeId(),
    title: '서울',
    img: seoul,
  },
  {
    id: makeId(),
    title: '대구',
    img: daegu,
  },
  {
    id: makeId(),
    title: '대전',
    img: daejeon,
  },
  {
    id: makeId(),
    title: '제주',
    img: jeju,
  },
];

export default bannerData;
