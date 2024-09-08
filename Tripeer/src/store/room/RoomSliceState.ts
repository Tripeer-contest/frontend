export interface YUserInfo {
  nickname: string;
  profileImage: string;
  userId: number;
  order: number;
}

export interface OnlineInfo extends YUserInfo {
  isOnline: boolean;
}
export type NavNumber = 0 | 1 | 2;

export interface RoomSliceState {
  room_page: NavNumber;
  room_userInfo: OnlineInfo[];
  room_townList: RoomTownInfo[];
  room_title: string;
  room_startDay: string;
  room_endDay: string;
  room_chatScrollIsBottom: boolean;
  room_mapSearchKeyword: string;
  room_map: any;
  room_chatScrollToBottom: (() => void) | null;
  room_chatSetScrollToBottom: (payload: () => void) => void;
  room_setChatScrollIsBottom: (isTrue: boolean) => void;
  room_chatScrollTo: ((offset: number) => void) | null;
  room_chatSetScrollFn: (payload: (offset: number) => void) => void;
  room_init: () => void;
  room_setUserInfo: (coworkers: OnlineInfo[]) => void;
  room_setPage: (page: 0 | 1 | 2) => void;
  room_setTownList: (towns: RoomTownInfo[]) => void;
  room_setTitle: (title: string) => void;
  room_setStartDay: (day: string) => void;
  room_setEndDay: (day: string) => void;
  room_setMapSearchKeyword: (keyword: string) => void;
  room_setMap: (map: any) => void;
  room_syncUser: (coworkers: OnlineInfo[]) => void;
}

export interface RoomTownInfo {
  cityId: number;
  townId: number;
  latitude: number;
  longitude: number;
  title: string;
}
