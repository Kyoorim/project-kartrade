import styled from "styled-components";
import Button from "./button";
import { BsChat, BsSuitHeart } from "react-icons/bs";

const BottomNav = () => {
  return (
    <Wrapper>
      <Button bgcolor="black" color="white" bdcolor="black" width="152px">
        <BsChat fill="white" /> <span>SEND MESSAGE</span>
      </Button>
      <Button bdcolor="#777777" width="152px">
        <BsSuitHeart /> <span>WISH LIST</span>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: 85px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;

  div {
    span {
      font-size: 0.8rem;
      font-weight: 500;
      margin-left: 5px;
    }
  }

  div:first-child {
    span {
      color: white;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export default BottomNav;
