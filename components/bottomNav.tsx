import { useContext } from "react";
import { WishListContext } from "@/store/wishListReducer";
import styled from "styled-components";
import Button from "./button";
import { BsChat, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useUser } from "@/store/userReducer";
import { useRouter } from "next/router";
import { WishListItem } from "@/store/wishListReducer";

const BottomNav = ({ cardData }) => {
  const { state, dispatch } = useContext(WishListContext);
  const router = useRouter();
  const { userObj } = useUser();
  const userId = userObj ? userObj.id : "";
  console.log(userId);
  const { id } = router.query;
  const itemId = id ? parseInt(id as string, 10) : 0;

  console.log(cardData);
  const item: WishListItem = {
    itemId: itemId,
    name: cardData.infoTitle,
    description: cardData.infoDetail,
    userId,
    mainImage: cardData.mainImage,
    profileId: cardData.profileId,
    price: cardData.price,
    accountId: userId,
  };
  console.log(item);
  console.log(cardData);

  const isItemInList = state.isItemInList;
  console.log(state);

  const handleClick = () => {
    // const isItemInList = state.items.some(
    //   (wishListItem) => wishListItem.itemId === item.itemId
    // );

    if (isItemInList[item.itemId]) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: item.itemId,
        accountId: item.userId,
      });
      dispatch({
        type: "SET_IS_ITEM_IN_LIST",
        payload: { itemId: item.itemId, value: false },
        accountId: item.userId,
      });
    } else {
      dispatch({ type: "ADD_ITEM", payload: item, accountId: item.userId });
      dispatch({
        type: "SET_IS_ITEM_IN_LIST",
        payload: { itemId: item.itemId, value: true },
        accountId: item.userId,
      });
    }
  };

  return (
    <Wrapper>
      <Button bgcolor="black" color="white" bdcolor="black" width="152px">
        <BsChat fill="white" /> <span>SEND MESSAGE</span>
      </Button>
      <Button bdcolor="#777777" width="152px" onClick={handleClick}>
        {isItemInList?.[item.itemId] ? (
          <BsSuitHeartFill fill="red" />
        ) : (
          <BsSuitHeart />
        )}
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
