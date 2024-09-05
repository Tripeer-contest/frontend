export type LimitLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

export interface KakaoMapOptions {
  center?: {
    latitude: number;
    longitude: number;
  };
  level?: LimitLevel;
}
