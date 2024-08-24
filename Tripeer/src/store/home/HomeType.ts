import { TownType } from '../../types/TownType.ts';

export interface HomeSlice {
  h_region: number[];
  h_category: number[];
  h_townList: TownType[];
  h_nowCityId: number;
  h_nowTownId: number;

  h_setRegion: (arr: number[]) => void;
  h_setCategory: (arr: number[]) => void;
  h_setTownList: (arr: TownType[]) => void;
  h_setNowCityId: (id: number) => void;
  h_setNowTownId: (id: number) => void;
}
