export type NavUrl = '/plan' | '/diary' | '/home' | '/cart' | '/mypage';

export interface NavButtonInterface {
  to: NavUrl;
  text: string;
}
