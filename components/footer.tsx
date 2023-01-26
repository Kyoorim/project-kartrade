import styled from "styled-components";
import brandName from "../public/brand.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper>
      <Image
        src={brandName}
        alt="brand-name"
        style={{ height: "17px", width: "103px" }}
      ></Image>
      <ul>
        <li>ABOUT US</li>
        <li>TERMS OF SERVICE</li>
        <li>CONTACT</li>
        <li>PRIVACY POLICY</li>
      </ul>
      <div>© 2023 KARTRADE LIMITED - ALL RIGHTS RESERVED.</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 295px;
  padding: 35px 25px 25px 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 34px;
      font-size: 0.75rem;
    }
  }

  div {
    height: 34px;
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Footer;
