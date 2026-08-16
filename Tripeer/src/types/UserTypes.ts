export interface UserType {
  nickname: string;
  profileImage: string;
  userId: number;
}

export interface ProfileType extends UserType {
  email: string;
  birth: string;
  style1: string;
  style1Num: number;
  style2: null | string;
  style2Num: number;
  style3: null | string;
  style3Num: number;
  allowNotifications: boolean;
}

export interface ProfileFormType {
  nickname: string;
  nickWarn: boolean;
  styleWarn: boolean;
  style: number[];
}
export type ORDER_COLOR_TYPE = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
