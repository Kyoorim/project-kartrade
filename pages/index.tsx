import styled from "styled-components";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <BgWrapper>
      <Main>Right Side</Main>
    </BgWrapper>
  );
}

const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e2e1e1;
  display: flex;
  background-size: 400px;
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position-x: 15%;
  background-position-y: center;
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
