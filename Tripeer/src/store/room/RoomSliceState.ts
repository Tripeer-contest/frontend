import { PlanSearchSpotInterface } from '../../types/PlaceType';

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
  room_sortType: string;
  room_mapSearchKeyword: string;
  room_map: any;
  room_selectedTownIdx: number;
  room_minLat: number;
  room_minLon: number;
  room_maxLat: number;
  room_maxLon: number;
  room_spotList: SpotYInterface[];
  room_spotInfo: {
    spotInfoId: number;
    latitude: number;
    longitude: number;
  } | null;
  room_setSpotInfo: (
    param: { spotInfoId: number; latitude: number; longitude: number } | null,
  ) => void;
  room_setSpotList: (param: SpotYInterface[]) => void;
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
  room_setSelectedTownIdx: (param: number) => void;
  room_setSortType: (param: string) => void;
  room_moveMap: ((latitude: number, longitude: number) => void) | null;
  room_setMoveMap: (
    payload: (latitude: number, longitude: number) => void,
  ) => void;
  room_setBound: (
    minLa: number,
    minLo: number,
    maxLa: number,
    maxLo: number,
  ) => void;
  room_makeMarkerBySpot:
    | null
    | ((spot: MapSpotType, options?: { imgSrc?: string }) => void);
  room_makeMarkerByGroup:
    | null
    | ((
        groupdId: number,
        spot: MapGroupType[],
        options?: { imgSrc?: string },
      ) => void);
  room_removeMarkerBySpot: null | ((id: number) => void);
  room_removeMarkerByGroup: null | ((id: number) => void);
  room_removeMarkerAll: null | (() => void);
  room_setMakeMarkerBySpot: (
    callback: (spot: MapSpotType, options?: { imgSrc?: string }) => void,
  ) => void;
  room_setMakeMarkerByGroup: (
    callback: (
      groupId: number,
      spot: MapGroupType[],
      options?: { imgSrc?: string },
    ) => void,
  ) => void;
  room_setRemoveMarkerBySpot: (callback: (id: number) => void) => void;
  room_setRemoveMarkerByGroup: (callback: (id: number) => void) => void;
  room_setRemoveMarkerAll: (callback: () => void) => void;
}

export type MapGroupType = {
  latitude: number;
  longitude: number;
  clickEvent?: (...param: unknown[]) => void;
};

export type MapSpotType = {
  spotInfoId: number;
  latitude: number;
  longitude: number;
  clickEvent?: (...param: unknown[]) => void;
};

export interface RoomTownInfo {
  cityId: number;
  townId: number;
  latitude: number;
  longitude: number;
  title: string;
}

export type SpotYInterface = YUserInfo & PlanSearchSpotInterface;
