export interface PlanTypes {
  title: string;
  townList: { cityId: number; townId: number }[];
  startDay: string;
  endDay: string;
}

interface UserInterface {
  nickname: string;
  userId: number;
  profileImage: string;
}

export interface PlanCardType {
  title: string;
  endDay: string;
  startDay: string;
  img: string;
  member: UserInterface[];
  newPlan: boolean;
  townList: string[];
  planId: number;
}
