export interface PlanCalendarSlice {
  c_nowCategory: number;
  c_setNowCategory: (id: number) => void;
  c_isDragging: boolean;
  c_setIsDragging: (isDragging: boolean) => void;
  c_searchList: number[];
  c_setSearchList: (arr: number[]) => void;
}
