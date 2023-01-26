import React, { ReactNode } from "react";

export type FCC<T = object> = React.FC<
  { children?: ReactNode | ReactNode[] } & T
>;

export {};

export type CardInfo = {
  el: {
    id: string;
    mainImage: any;
    profileId: string;
    infoTitle: string;
    infoDetail: string;
    price: string;
  };
};

export type CardDetailInfo = {
  cardData: {
    id: string;
    mainImage: any;
    profileId: string;
    infoTitle: string;
    infoDetail: string;
    price: string;
    detailImage: {
      id: string;
      image: HTMLImageElement;
    };
    specificDetails: {
      id: string;
      item: string;
    };
  };
};
