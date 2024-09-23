export interface PlaceType {
  spotId: number;
  spotName: string;
  spotImg: string;
  address: string;
  wishlist: boolean;
  starPointAvg: number;
}

export interface PlaceDetailType extends PlaceType {
  latitude: number;
  longitude: number;
}

export interface RecommendType {
  comment: string;
  keyword: string;
  spotInfoDtos: PlaceType[];
}

export interface MetaInfoType {
  title: string;
  content: string;
}

export interface SpotDetailInterface {
  data: {
    title: string;
    imageList: string[];
    contentType: string;
    starPointAvg: number;
    latitude: number;
    longitude: number;
    addr1: string;
    overview: string;
    like: boolean;
    reviewPageCount: number;
    reviewDtoList: ReviewInterface[];
    blogInfoList: blogInfoInterface[];
    reviewTotalCount: number;
    similarSpotList: PlaceDetailType[];
    nearSpotList: PlaceDetailType[];
    additionalInfo: MetaInfoType[];
  };
}

export interface ReviewInterface {
  spotReviewId: number;
  userId: number;
  spotInfoId: number;
  nickname: string;
  profileImage: string;
  starPoint: number;
  message: string;
  createTime: string;
  img: string[];
}

export interface ReviewListInterface {
  data: ReviewInterface[];
}

export interface blogInfoInterface {
  title: string;
  contents: string;
  url: string;
  blogname: string;
  thumbnail: string;
  datetime: string;
}

export interface PlanSearchSpotInterface {
  spotInfoId: number;
  title: string;
  contentType: string;
  addr: string;
  latitude: number;
  longitude: number;
  img: string;
  wishlist: boolean;
  spot: boolean;
}

export interface PlanSearchSpotAPI {
  pageParams: number[];
  pages: { lastPage: boolean; searchResultList: PlanSearchSpotInterface[] }[];
}
