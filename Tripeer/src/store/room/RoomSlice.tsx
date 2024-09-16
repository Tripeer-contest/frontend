import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import {
  NavNumber,
  OnlineInfo,
  RoomSliceState,
  RoomTownInfo,
} from './RoomSliceState';

const initState = {
  room_userInfo: [],
  room_page: 0 as NavNumber,
  room_townList: [],
  room_title: '',
  room_startDay: '',
  room_endDay: '',
  room_chatScrollIsBottom: true,
  room_chatScrollTo: null,
  room_chatScrollToBottom: null,
  room_mapSearchKeyword: '',
  room_map: null,
  room_selectedTownIdx: 0,
  room_sortType: '',
  room_minLat: 0,
  room_minLon: 0,
  room_maxLat: 0,
  room_maxLon: 0,
  room_moveMap: null,
  room_makeMarkerBySpot: null,
  room_makeMarkerByGroup: null,
  room_removeMarkerBySpot: null,
  room_removeMarkerByGroup: null,
  room_removeMarkerAll: null,
  room_spotList: [],
  room_spotInfo: null,
};

export const RoomSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  RoomSliceState
> = (set) => ({
  ...initState,
  room_init: () => set(() => ({ ...initState })),
  room_setUserInfo: (payload: OnlineInfo[]) =>
    set(() => ({ room_userInfo: [...payload] })),
  room_setPage: (page: NavNumber) => set(() => ({ room_page: page })),
  room_setTownList: (towns: RoomTownInfo[]) =>
    set(() => ({ room_townList: [...towns] })),
  room_setTitle: (title: string) => set(() => ({ room_title: title })),
  room_setEndDay: (day: string) => set(() => ({ room_endDay: day })),
  room_setStartDay: (day: string) => set(() => ({ room_startDay: day })),
  room_chatSetScrollFn: (payload) =>
    set(() => ({ room_chatScrollTo: payload })),
  room_setChatScrollIsBottom: (isTrue: boolean) =>
    set(() => ({ room_chatScrollIsBottom: isTrue })),
  room_chatSetScrollToBottom: (payload) =>
    set(() => ({ room_chatScrollToBottom: payload })),
  room_setMapSearchKeyword: (keyword) =>
    set(() => ({ room_mapSearchKeyword: keyword })),
  room_setMap: (map) => set({ room_map: map }),
  room_syncUser: (coworkers) =>
    set((store) => {
      const newOne = coworkers.filter(
        (newUser) =>
          !store.room_userInfo.some((user) => user.userId === newUser.userId),
      );
      return { room_userInfo: [...store.room_userInfo, ...newOne] };
    }),
  room_setSelectedTownIdx: (idx: number) =>
    set(() => ({ room_selectedTownIdx: idx })),
  room_setSortType: (type) => set(() => ({ room_sortType: type })),
  room_setBound: (param1, param2, param3, param4) =>
    set(() => ({
      room_minLat: param1,
      room_minLon: param2,
      room_maxLat: param3,
      room_maxLon: param4,
    })),
  room_setMoveMap: (callback) => set(() => ({ room_moveMap: callback })),
  room_setMakeMarkerBySpot: (callback) =>
    set(() => ({ room_makeMarkerBySpot: callback })),
  room_setMakeMarkerByGroup: (callback) =>
    set(() => ({ room_makeMarkerByGroup: callback })),
  room_setRemoveMarkerBySpot: (callback) =>
    set(() => ({ room_removeMarkerBySpot: callback })),
  room_setRemoveMarkerByGroup: (callback) =>
    set(() => ({ room_removeMarkerByGroup: callback })),
  room_setRemoveMarkerAll: (callback) =>
    set(() => ({ room_removeMarkerAll: callback })),
  room_setSpotList: (param) => set(() => ({ room_spotList: param })),
  room_setSpotInfo: (param) => set(() => ({ room_spotInfo: param })),
});
