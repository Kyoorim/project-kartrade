import React, { ReactNode } from "react";

export type FCC<T = object> = React.FC<
  { children?: ReactNode | ReactNode[] } & T
>;

export {};
