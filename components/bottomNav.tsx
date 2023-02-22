import { useContext, useEffect, useState } from "react";
import { WishListContext } from "@/store/wishListReducer";
import styled from "styled-components";
import Button from "./button";
import { BsChat, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

const BottomNav = ({ item, cardData }) => {
  const { state, dispatch } = useContext(WishListContext);
  const [itemInList, setItemInList] = useState(false);
  console.log(state);
  useEffect(() => {
    if (state) {
      setItemInList(
        state.items.some((wishListItem) => wishListItem.itemId === item.itemId)
      );
    }
  }, [state, item.itemId]);

  const handleClick = async (): Promise<void> => {
    if (itemInList) {
      dispatch({ type: "REMOVE_ITEM", payload: item.itemId });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          itemId: item.itemId,
          name: cardData.infoTitle,
          description: cardData.infoDetail,
          userId: item.userId,
          mainImage: cardData.mainImage,
          profileId: cardData.profileId,
          price: cardData.price,
        },
      });
    }
  };
  return (
    <Wrapper>
      <Button bgcolor="black" color="white" bdcolor="black" width="152px">
        <BsChat fill="white" /> <span>SEND MESSAGE</span>
      </Button>
      <Button bdcolor="#777777" width="152px" onClick={handleClick}>
        {itemInList ? <BsSuitHeartFill fill="red" /> : <BsSuitHeart />}
        <span>WISH LIST</span>
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
