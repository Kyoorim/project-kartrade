import styled from "styled-components";
import Image from "next/image";
import logo from "../public/logo.svg";
import brand from "../public/brand.svg";
import search from "../public/search.svg";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <LogoContainer onClick={() => router.push("/")}>
        <Image src={logo} alt="logo" style={{ height: "29px" }}></Image>
        <Image src={brand} alt="brand" style={{ height: "15.4px" }}></Image>
      </LogoContainer>
      <MenuContainer>
        <Image src={search} alt="search" style={{ height: "17px" }}></Image>
        <div></div>
      </MenuContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: 50px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 1em 1.5em;
  position: fixed;
  background-color: white;
`;

const LogoContainer = styled.section`
  width: 141px;
  height: 29px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border-top: 1.6px solid;
    border-bottom: 1.6px solid;
    height: 12px;
    width: 17px;
    margin-left: 25px;
  }
`;

export default Nav;
