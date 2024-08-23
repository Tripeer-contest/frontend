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

export interface RegionType {
  name: string;
  cityId: number;
  townId: number;
  img: string;
}

export type ContentCategory = '전체' | '숙박' | '맛집' | '명소';
