import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(0);

  const addItemHandler = () => {
    setQuantity(quantity + 1);
  };

  const removeItemHandler = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Wrapper>
      <div>Quantity</div>
      <MinusDiv onClick={removeItemHandler}>
        <Image src="/minus.svg" alt="decrement" width={38} height={38} />
      </MinusDiv>
      <NumDiv>{quantity}</NumDiv>
      <PlusDiv onClick={addItemHandler}>
        <Image src="/plus.svg" alt="increment" width={13} height={13} />
      </PlusDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 25px 2em 25px;
  border-bottom: 1px solid #d8d8d8;
  div {
    margin-right: 30px;
  }
`;

const MinusDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NumDiv = styled.div`
  width: 19px;
`;
const PlusDiv = styled.div`
  width: 38px;
  height: 38px;
  background-image: url("/plus_border.svg");
  background-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export default QuantityBox;
