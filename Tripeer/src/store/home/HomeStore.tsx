import { StateCreator } from 'zustand';
import { HomeSlice } from './HomeType.ts';
import { TownType } from '../../types/TownType.ts';

export const createHomeSlice: StateCreator<HomeSlice> = (set) => ({
  h_region: [],
  h_category: [],
  h_nowCityId: -1,
  h_nowTownId: -1,
  h_nowPlaceId: -1,
  h_townList: [
    {
      cityId: -1,
      description: '',
      townId: -1,
      townImg: '',
      townName: '전체',
    },
  ],

  h_setRegion: (arr: number[]) => set(() => ({ h_region: arr })),
  h_setCategory: (arr: number[]) => set(() => ({ h_category: arr })),
  h_setTownList: (arr: TownType[]) => set(() => ({ h_townList: arr })),
  h_setNowCityId: (id: number) => set(() => ({ h_nowCityId: id })),
  h_setNowTownId: (id: number) => set(() => ({ h_nowTownId: id })),
  h_setNowPlaceId: (id: number) => set(() => ({ h_nowPlaceId: id })),
});
