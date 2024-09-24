import { v4 as makeId } from 'uuid';
import tour from '../assets/banner/style/tourist.png';
import leisure from '../assets/banner/style/leisure.png';
import shop from '../assets/banner/style/shop.png';
import festival from '../assets/banner/style/festival.png';
import culture from '../assets/banner/style/culture.png';
import eat from '../assets/banner/style/eat.png';
import packageTravel from '../assets/banner/style/package.png';
import camping from '../assets/banner/content/camping.png';
import busan from '../assets/banner/region/busan.png';
import seoul from '../assets/banner/region/seoul.png';
import daegu from '../assets/banner/region/daegu.png';
import daejeon from '../assets/banner/region/daejeon.png';
import jeju from '../assets/banner/region/jeju.png';
type Banner = {
  id: string;
  img: string;
  title: string;
  keyword: string;
  cityId: number;
  townId: number;
  comment: string;
};
const bannerData: Banner[] = [
  {
    id: makeId(),
    title: 'camp',
    img: camping,
    keyword: '캠핑',
    cityId: -1,
    townId: -1,
    comment: `우리 캠핑가자`,
  },
  {
    id: makeId(),
    title: '관광지',
    img: tour,
    keyword: '관광지',
    cityId: -1,
    townId: -1,
    comment: `트리피어가 소개하는 관광지`,
  },
  {
    id: makeId(),
    title: '레저스포츠',
    img: leisure,
    keyword: '레포츠',
    cityId: -1,
    townId: -1,
    comment: `PLAY! 레포츠`,
  },
  {
    id: makeId(),
    title: '쇼핑',
    img: shop,
    keyword: '쇼핑',
    cityId: -1,
    townId: -1,
    comment: `쇼핑 매니아 당신을 위한 여행지`,
  },
  {
    id: makeId(),
    title: '축제',
    img: festival,
    keyword: '축제',
    cityId: -1,
    townId: -1,
    comment: `이런 축제 어때요?`,
  },
  {
    id: makeId(),
    title: '문화',
    img: culture,
    keyword: '문화시설',
    cityId: -1,
    townId: -1,
    comment: `누려봐요 문화시설`,
  },
  {
    id: makeId(),
    title: '맛집',
    img: eat,
    keyword: '맛집',
    cityId: -1,
    townId: -1,
    comment: `오늘은? 맛집투어!`,
  },
  {
    id: makeId(),
    title: '패키지',
    img: packageTravel,
    keyword: '패키지',
    cityId: -1,
    townId: -1,
    comment: `이곳저곳 패키지여행`,
  },
  {
    id: makeId(),
    title: '부산',
    img: busan,
    keyword: '추천',
    cityId: -6,
    townId: -1,
    comment: `이번 여행은 부산으로!`,
  },
  {
    id: makeId(),
    title: '서울',
    img: seoul,
    keyword: '추천',
    cityId: 1,
    townId: -1,
    comment: `서울 어디까지 가봤니?`,
  },
  {
    id: makeId(),
    title: '대구',
    img: daegu,
    keyword: '추천',
    cityId: 4,
    townId: -1,
    comment: `Colorful 대구`,
  },
  {
    id: makeId(),
    title: '대전',
    img: daejeon,
    keyword: '추천',
    cityId: 3,
    townId: -1,
    comment: `꿀잼도시 대전여행`,
  },
  {
    id: makeId(),
    title: '제주',
    img: jeju,
    keyword: '추천',
    cityId: 39,
    townId: -1,
    comment: `떠나요~ 제주도`,
  },
];

export default bannerData;
