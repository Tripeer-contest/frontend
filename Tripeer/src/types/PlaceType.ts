export interface PlaceType {
  spotId: number;
  spotName: string;
  spotImg: string;
  address: string;
  wishlist: boolean;
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
