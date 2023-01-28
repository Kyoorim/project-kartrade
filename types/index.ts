import React, { ReactNode } from "react";

export type FCC<T = object> = React.FC<
  { children?: ReactNode | ReactNode[] } & T
>;

export {};

export type CardInfo = {
    id: string;
    mainImage: any;
    profileId: string;
    infoTitle: string;
    infoDetail: string;
    price: number;
    detailImage: {
      id: string;
      image: HTMLImageElement;
    }[]
    specificDetails: {
      id: string;
      item: string;
    }[]
};
