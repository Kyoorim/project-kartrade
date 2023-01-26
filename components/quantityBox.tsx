import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

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
      <div onClick={removeItemHandler}>
        <AiOutlineMinusCircle />
      </div>
      <div>{quantity}</div>
      <div onClick={addItemHandler}>
        <AiOutlinePlusCircle />
      </div>
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
  svg {
    width: 37px;
    height: 37px;
    font-weight: 400;
  }
`;

export default QuantityBox;
