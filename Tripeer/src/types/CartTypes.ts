export interface ControllerInterface {
  Category: string[];
  selectedCategry: number;
  slideTo: (idx: number) => void;
  maxWidth?: `${string}px` | `${string}%` | `${string}vw` | `${string}rem`;
}
