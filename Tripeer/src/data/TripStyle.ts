import { v4 } from 'uuid';
import style1 from '../assets/styleChip/style1.png';
import style2 from '../assets/styleChip/style2.png';
import style3 from '../assets/styleChip/style3.png';
import style4 from '../assets/styleChip/style4.png';
import style5 from '../assets/styleChip/style5.png';
import style6 from '../assets/styleChip/style6.png';
import style7 from '../assets/styleChip/style7.png';

const styleCategory = [
  {
    id: v4(),
    title: '관광지',
    img: style1,
  },
  {
    id: v4(),
    title: '문화시설',
    img: style2,
  },
  {
    id: v4(),
    title: '축제',
    img: style3,
  },
  {
    id: v4(),
    title: '패키지',
    img: style4,
  },
  {
    id: v4(),
    title: '레포츠',
    img: style5,
  },
  {
    id: v4(),
    title: '쇼핑',
    img: style6,
  },
  {
    id: v4(),
    title: '음식점',
    img: style7,
  },
];

export default styleCategory;
