export interface wishItem {
  wishlistId: number;
  cityId: number;
  townId: number;
  spotInfoId: number;
  title: string;
  contentType: '전체' | '맛집' | '숙박' | '명소';
  addr: string;
  latitude: number;
  longitude: number;
  img: string;
  like: boolean;
  starPointAvg: number;
}

export interface wishListAPI {
  data: wishItem[];
}
