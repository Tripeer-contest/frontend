import { UserType } from './UserTypes';

export interface DiaryItem {
  endDay: string;
  img: string;
  member: UserType[];
  newPlan: boolean;
  planId: number;
  startDay: string;
  title: string;
  townList: string[];
}

export interface DiaryListAPI {
  data: DiaryItem[];
}
