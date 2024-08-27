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
