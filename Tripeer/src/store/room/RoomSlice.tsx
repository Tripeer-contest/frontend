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
  room_totalYList: [],
  room_timeYList: [],
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
  room_setTotalYList: (payload) => set({ room_totalYList: payload }),
  room_setTimeYList: (payload) => set({ room_timeYList: payload }),
});
