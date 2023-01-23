import React from "react";
import styled from "styled-components";

const ImageCard = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 325px;
  height: 325px;
`;

export default ImageCard;
