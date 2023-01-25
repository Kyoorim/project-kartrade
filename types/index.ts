import React, { ReactNode } from "react";

export type FCC<T = object> = React.FC<
  { children?: ReactNode | ReactNode[] } & T
>;

export {};

export type cardInfoType = {
  el: {
    id: string;
    mainImage: any;
    profileId: string;
    infoTitle: string;
    infoDetail: string;
    price: string;
  };
};

export type cardDetailInfoType = {
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
