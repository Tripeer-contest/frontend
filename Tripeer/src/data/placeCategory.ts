import restaurantImg from '../assets/category/restaurant.png';
import unRestaurantImg from '../assets/category/unRestaurant.png';
import stayImg from '../assets/category/stay.png';
import unStayImg from '../assets/category/unStay.png';
import meccaImg from '../assets/category/mecca.png';
import unMeccaImg from '../assets/category/unMecca.png';

export const placeCategory = [
  {
    name: '전체',
    id: 0,
    image: '',
    unImage: ',',
  },
  {
    name: '맛집',
    id: 1,
    image: restaurantImg,
    unImage: unRestaurantImg,
  },
  {
    name: '숙박',
    id: 2,
    image: stayImg,
    unImage: unStayImg,
  },
  {
    name: '명소',
    id: 3,
    image: meccaImg,
    unImage: unMeccaImg,
  },
];
