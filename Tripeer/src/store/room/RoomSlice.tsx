import { StateCreator } from 'zustand';
import { StoreState } from '../store';
import { OnlineInfo, RoomSliceState } from './RoomSliceState';
import { TownRoomInterface } from '../../types/PlanDetailTypes';

const initState = {
  room_coworkerList: [],
  room_id: -1,
  room_title: '',
  room_townList: [],
};

export const RoomSlice: StateCreator<
  StoreState,
  [['zustand/devtools', never]],
  [],
  RoomSliceState
> = (set) => ({
  ...initState,
  room_init: () => set(() => ({ ...initState })),
  room_setId: (payload: number) => set(() => ({ room_id: payload })),
  room_setTitle: (payload: string) => set(() => ({ room_title: payload })),
  room_setTownList: (payload: TownRoomInterface[]) =>
    set(() => ({ room_townList: [...payload] })),
  room_setCoworkerList: (payload: OnlineInfo[]) =>
    set(() => ({ room_coworkerList: [...payload] })),
});
