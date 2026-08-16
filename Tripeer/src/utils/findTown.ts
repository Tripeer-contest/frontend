import TownData from '../data/cityTown.json';

export const findSearchTown = (search: string) => {
  return TownData.filter((town) => town.name.includes(search));
};
