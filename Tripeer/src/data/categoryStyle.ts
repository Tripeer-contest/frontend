import restaurantIcon from '../assets/category/restaurant_color.svg';
import stayIcon from '../assets/category/stay_color.svg';
import meccaIcon from '../assets/category/mecca_color.svg';

type Category = '맛집' | '숙박' | '명소';

const CATEGORY_STYLE: Record<Category, { color: string; icon: string }> = {
  맛집: {
    color: '#D25B06',
    icon: restaurantIcon,
  },
  숙박: {
    color: '#D26D6D',
    icon: stayIcon,
  },
  명소: {
    color: '#2D8F8A',
    icon: meccaIcon,
  },
};

export const getCategoryStyle = (contentType: string) => {
  return CATEGORY_STYLE[contentType as Category] || CATEGORY_STYLE['명소'];
};
