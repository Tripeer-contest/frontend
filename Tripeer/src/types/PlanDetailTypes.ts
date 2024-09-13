import { UserType } from './UserTypes';

export interface RoomInterfaceAPI {
  data: RoomInterface;
}

export interface RoomInterface {
  coworkerList: UserType[];
  planId: number;
  title: string;
  townList: TownRoomInterface[];
}

export interface TownRoomInterface {
  cityId: number;
  description: string;
  img: string;
  latitude: number;
  longitude: number;
  title: string;
  townId: number;
}

export interface ChatInterface {
  userId: number;
  message: string;
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  amOrPm: string;
}

export interface RecommendInterfaceAPI {
  data: RecommendInterface[];
}
export interface RecommendInterface {
  keyword: string;
  comment: string;
  spotInfoDtos: SpotInterface[];
}

export interface SpotInterface {
  spotInfoId: number;
  title: string;
  contentType: string;
  addr: string;
  starPointAvg: number;
  latitude: number;
  longitude: number;
  img: string;
  wishlist: boolean;
  spot: false;
  description: string;
}
