export interface ItemInfo {
  itemName: string;
  categoryName: string;
  location: string;
  img: string;
  rating: number;
}

export interface UserInfo {
  isLike: boolean;
}

export interface MainItem {
  itemInfo: ItemInfo;
  userInfo: UserInfo;
  itemClickHandler?: () => void;
  heartClickHandler?: () => void;
}
