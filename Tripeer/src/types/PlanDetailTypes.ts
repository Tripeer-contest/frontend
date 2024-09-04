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
