export interface DiaryTypes {
  planId: number;
  diaryDetail: {
    planId: number;
    title: string;
    img: string;
    townList: string[];
    startDay: string;
    endDay: string;
    member: { userId: number; nickname: string; profileImage: string }[];
    newPlan: boolean;
  };
  diaryDayList: {
    planDayId: number;
    date: string;
    planDetailList: {
      planDetailId: number;
      title: string;
      contentType: string;
      image: string;
      address: string;
      latitude: number;
      longitude: number;
      day: number;
      step: number;
      cost: number;
    }[];
  }[];
  cityIdTownIdList: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  }[];
}

export interface DiaryAPI {
  data: DiaryTypes;
}
