import CardBox from "@/components/cardBox";
import Heading from "@/components/heading/header";
import Nav from "@/components/nav";
import SortingBar from "@/components/sortingBar";
import styled from "styled-components";
import { dummyCardInfo as cardInfo } from "@/asset/dummyCardInfo";

export default function Home() {
  return (
    <BgWrapper>
      <Main>
        <Nav />
        <SortingBar />
        <HomeImage>
          <ImageBox>
            <Heading level={2} color="white" px="20px">
              We are creative traders
            </Heading>
            <p>
              Sell, Trade, Buy all Kpop photocards across the World. We are here
              to enable K-Pop fans to instantly trade cards like never before
            </p>
          </ImageBox>
        </HomeImage>
        {cardInfo.map((el) => (
          <CardBox key={el.id} el={el} />
        ))}
      </Main>
    </BgWrapper>
  );
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
  height: 433px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 325px;
  height: 381.5px;
  background-image: url("/mainImage.svg");
  background-repeat: no-repeat;
  p {
    color: white;
    padding: 0px 20px 32.5px 20px;
  }
`;
