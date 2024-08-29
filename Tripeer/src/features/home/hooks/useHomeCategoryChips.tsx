import { TownType } from '../../../types/TownType.ts';
import { PlaceCategoryTypes } from '../../../types/PlaceCategoryTypes.ts';

const useHomeCategoryChips = () => {
  const isTownType = (
    item: TownType | PlaceCategoryTypes,
  ): item is TownType => {
    return (item as TownType).townName !== undefined;
  };

  return { isTownType };
};

export default useHomeCategoryChips;
