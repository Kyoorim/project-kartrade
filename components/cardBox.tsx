import styled from "styled-components";
import ImageCard from "./imageCard";

// interface cardInfoProps {
//   id: number;
//   mainImage: any;
//   profileId: string;
//   infoTitle: string;
//   infoDetail: string;
//   price: string;
// }

const CardBox = ({ el }) => {
  return (
    <Wrapper>
      <PhotoContainer>{el.infoTitle}</PhotoContainer>
      <InfoContainer>{el.profileId}</InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 637.56px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  background-color: white;
`;

const PhotoContainer = styled.section``;

const InfoContainer = styled.section``;

export default CardBox;
