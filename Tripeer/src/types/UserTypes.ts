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
}

export interface ProfileFormType {
  nickname: string;
  nickWarn: boolean;
  styleWarn: boolean;
  style: number[];
}
