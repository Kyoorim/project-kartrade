import React from "react";
import { withRouter } from "next/router";
import CardBox from "@/components/cardBox";
import Heading from "@/components/heading/header";
import Nav from "@/components/nav";
import SortingBar from "@/components/sortingBar";
import styled from "styled-components";
import Footer from "@/components/footer";

import { getPostDetails, getPostIdList } from "../../lib/posts";
import BottomNav from "@/components/bottomNav";

const CardDetail = ({
  cardData,
}: {
  cardData: {
    infoTitle: string;
    infoDetail: string;
    price: string;
    profileId: string;
    mainImage: HTMLImageElement;
  };
}) => {
  return (
    <BgWrapper>
      <Main>
        <Nav />
        <SortingBar />
        <HomeImage>
          <Heading level={2}>{cardData.infoTitle}</Heading>
          <Heading level={4}>
            Inspired by my dear friend Calli, I decided to create a custom
            photocard binder that will fit BTS mini photocards! 💜✨ I received
            a lot of messages asking if the pockets on the first album I listed
            were big enough to fit the official mini PCs available on Weverse
            Shop. They were unfortunately too small, and I couldn’t seem to find
            any suitable alternatives, so I had to make something special for
            ARMY~! 🥰
          </Heading>
          <Heading level={2}>USD {cardData.price}</Heading>
        </HomeImage>
        <Footer />
        <BottomNav />
      </Main>
    </BgWrapper>
  );
};

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cardData = await getPostDetails(params.id as string);
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

const HomeImage = styled.div`
  width: 370px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
`;

export default CardDetail;
