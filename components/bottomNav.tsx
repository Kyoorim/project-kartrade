import styled from "styled-components";
import Button from "./button";

const BottomNav = () => {
  return (
    <Wrapper>
      <Button bgcolor="black" color="white" bdcolor="black">
        SEND MESSAGE
      </Button>
      <Button>WISH LIST</Button>
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
`;

export default BottomNav;
