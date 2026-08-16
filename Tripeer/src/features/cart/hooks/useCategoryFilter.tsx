import { useMemo } from 'react';
import zustandStore from '../../../store/store';
import { wishItem } from '../types/wishListItem';

export default function useCategoryFilter(items: wishItem[]) {
  const selected = zustandStore((state) => state.cart_selectCategory);
  const filteredItem = useMemo(() => {
    if (selected === 0) return items;
    else {
      return items.filter((item) => item.cityId === selected);
    }
  }, [selected, items]);
  return filteredItem;
}
