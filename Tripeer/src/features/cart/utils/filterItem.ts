import { wishItem } from '../types/wishListItem';

export function filterByCategory(items: wishItem[]) {
  const itemList: {
    전체: wishItem[];
    숙박: wishItem[];
    맛집: wishItem[];
    명소: wishItem[];
  } = {
    전체: [...items],
    숙박: [],
    맛집: [],
    명소: [],
  };
  items.forEach((item) => {
    itemList[item.contentType].push(item);
  });

  return itemList;
}
