import { ReactNode } from 'react';

export interface ModalProps {
  pageInfo: {
    title: string;
    mobileTitle: string;
    backHandler: () => void;
    canNext: boolean;
  };
  children: ReactNode;
}

export interface TownInterface {
  idx: number;
  cityId: number;
  townId: number;
  name: string;
}
