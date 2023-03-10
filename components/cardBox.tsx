import styled from "styled-components";
import Image from "next/image";
import Heading from "./heading/header";
import Link from "next/link";
import { CardInfo } from "@/types";

const CardBox: React.FC<{ cardInfo: CardInfo }> = ({ cardInfo }) => {
  return (
    <Wrapper>
      <PhotoContainer>
        <Link href={`/cards/${cardInfo.id}`}>
          <Image
            src={cardInfo.mainImage}
            alt="mainImage"
            style={{ maxWidth: "370px", minHeight: "325px" }}
          ></Image>
        </Link>
        <ProfileContainer>
          <Image
            src={cardInfo.mainImage}
            alt="mainImage"
            style={{ width: "38px", height: "38px", borderRadius: "50%" }}
          ></Image>

          <div>@{cardInfo.profileId}</div>
        </ProfileContainer>
      </PhotoContainer>
      <InfoContainer>
        <Heading level={4} pt={["1.4em", "1.3em", "1em"]} pb="11px">
          {cardInfo.infoTitle}
        </Heading>
        <InfoDetailContainer>{cardInfo.infoDetail}</InfoDetailContainer>
        <Heading level={5}>USD {cardInfo.price}</Heading>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #d8d8d8;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;
`;

const PhotoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  div:first-child {
    display: flex;
    justify-content: center;
  }
  img {
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px) {
      width: 325px;
      height: 325px;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 325px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #d8d8d8;
  padding-top: 17px;
  padding-bottom: 15px;
  img {
    margin-right: 9px;
  }
  div {
    color: #515151;
  }
`;

const InfoContainer = styled.section`
  @media only screen and (max-width: 800px) {
    width: 325px;
  }
`;

const InfoDetailContainer = styled.div`
  height: 60px;
  line-height: 1.4em;
  color: #777777;
  font-size: 0.87rem;
  margin-bottom: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default CardBox;
