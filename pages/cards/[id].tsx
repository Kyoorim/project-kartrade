import React from "react";
import Heading from "@/components/heading/header";
import Nav from "@/components/nav";
import PathBar from "@/components/pathBar";
import styled from "styled-components";
import Footer from "@/components/footer";
import Image from "next/image";
import { BsChat } from "react-icons/bs";
import { getPostDetails, getPostIdList } from "../../lib/posts";
import BottomNav from "@/components/bottomNav";
import PhotoBox from "@/components/photoBox";
import QuantityBox from "@/components/quantityBox";
import SpecificDetails from "@/components/specificDetails";
import { CardInfo } from "@/types";
import { InferGetStaticPropsType } from "next";

const CardDetail = ({ cardData }: { cardData: CardInfo }) => {
  return (
    <BgWrapper>
      <Main>
        <Nav />
        <PathBar title={'Detail Page'} />
        <ContentWrapper>
          <ProfileContainer>
            <ProfileBox>
              <Image
                src={cardData.mainImage}
                alt="mainImage"
                style={{ width: "38px", height: "38px", borderRadius: "50%" }}
              ></Image>
              <div>@{cardData.profileId}</div>
            </ProfileBox>
            <MessageBox>
              <BsChat fill="#515151" />
              <span>Send Message</span>
            </MessageBox>
          </ProfileContainer>
          <InfoContainer>
            <Heading level={3} mb="1em">
              {cardData.infoTitle}
            </Heading>
            <p>{cardData.infoDetail}</p>
            <Heading level={3} mb="0.1em">
              USD {cardData.price}
            </Heading>
            <p> Local Taxes included (where applicable) </p>
          </InfoContainer>
        </ContentWrapper>
        {cardData.detailImage.map((photo) => (
          <PhotoBox key={photo.id} photo={photo}></PhotoBox>
        ))}
        <QuantityBox />
        <SpecificDetails cardData={cardData} />
        <Footer />
        <BottomNav cardData={cardData} />
      </Main>
    </BgWrapper>
  );
};

export function getStaticPaths() {
  const paths = getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }: InferGetStaticPropsType<any>) {
  const cardData = getPostDetails(params.id as string);
  return {
    props: {
      cardData,
    },
  };
}

const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  background-color: #e2e1e1;
  display: flex;
  flex-direction: column;
  background-size: 400px;
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position-x: 15%;
  background-position-y: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.section`
  background-color: white;
  position: relative;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    position: relative;
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    margin: 0 0 0 calc(50% - 1px);
    zoom: 1.25;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px 0 25px;
`;

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 81.41px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;

  img {
    margin-right: 9px;
  }

  div,
  span {
    color: #515151;
  }

  @media only screen and (max-width: 800px) {
    width: 325px;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const MessageBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 19px;
    height: 19px;
    margin-right: 9px;
  }
`;

const InfoContainer = styled.div`
  padding: 2em 0 1em 0;
  border-bottom: 1px solid #d8d8d8;
  @media only screen and (max-width: 800px) {
    width: 325px;
  }

  p {
    font-weight: 400;
    color: #777777;
    margin-bottom: 2em;
  }
`;

export default CardDetail;
