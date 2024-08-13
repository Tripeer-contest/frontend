import { TownInterface } from '../../types/PlanTypes';

export interface PlanState {
  spots: TownInterface[];
  startDay: string;
  endDay: string;
  planTitle: string;
  planPage: number;
  initCreatePlan: () => void;
  addSpot: (payload: TownInterface) => void;
  removeSpot: (payload: TownInterface) => void;
  planToNext: () => void;
  planToPrev: () => void;
}