import styled from "styled-components";
import {CardInfo} from "@/types";
import Heading from "./heading/header";
import React from "react";

const SpecificDetails: React.FC<{cardData: CardInfo}> = ({cardData}) => {
  return (
    <Wrapper>
      <Heading level={6} mb="16px">
        Specific Details
      </Heading>
      <ul>
        {cardData.specificDetails.map((detail) => (
          <li key={detail.id}>{detail.item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 25px 25px 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #d8d8d8;

  ul {
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 34px;
      font-size: 1rem;
      color: #777777;
    }
  }
`;

export default SpecificDetails;
