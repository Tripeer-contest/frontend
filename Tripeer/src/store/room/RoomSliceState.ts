import { TownRoomInterface } from '../../types/PlanDetailTypes';
import { UserType } from '../../types/UserTypes';

export interface OnlineInfo extends UserType {
  isOnline: boolean;
}
export interface RoomSliceState {
  room_id: number;
  room_title: string;
  room_townList: TownRoomInterface[];
  room_coworkerList: OnlineInfo[];
  room_init: () => void;
  room_setId: (id: number) => void;
  room_setTitle: (title: string) => void;
  room_setTownList: (towns: TownRoomInterface[]) => void;
  room_setCoworkerList: (coworkers: OnlineInfo[]) => void;
}
