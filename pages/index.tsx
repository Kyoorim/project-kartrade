import Nav from "@/components/nav";
import MainBody from "@/components/mainBody";
import styled from "styled-components";
import { dummyCardInfo as cardInfo } from "@/asset/dummyCardInfo";
import Footer from "@/components/footer";
import {CardInfo} from "@/types";

export default function Home(data: {cardInfo: CardInfo[]}) {
  return (
    <BgWrapper>
      <Main>
        <Nav />
        <MainBody cardInfo={data.cardInfo} />
        <Footer />
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

export async function getServerSideProps(context) {
    if (Object.keys(context.query).length === 0) {
        return {
            props: {
                cardInfo
            },
        }
    } else {
        const sortDirection = context.query.sort;
        cardInfo.sort((a, b) => {
            return sortDirection === "price_asc" ? a.price - b.price : b.price - a.price;
        });

        return {
            props: {
                cardInfo
            },
        }
    }
}
