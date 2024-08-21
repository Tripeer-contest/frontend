export interface RegisterSlice {
  r_pageNumber: number;
  r_nickname: string;
  r_year: string;
  r_month: string;
  r_day: string;
  r_style: number[];
  r_nextPage: () => void;
  r_backPage: () => void;
  r_setNickname: (value: string) => void;
  r_setYear: (value: string) => void;
  r_setMonth: (value: string) => void;
  r_setDay: (value: string) => void;
  r_setStyle: (arr: number[]) => void;
}
