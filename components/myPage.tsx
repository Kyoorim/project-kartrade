import { useContext } from "react";
import { WishListContext } from "@/store/wishListReducer";
import styled from "styled-components";
import Button from "./button";
import { authService } from "@/firebase";
import PathBar from "./pathBar";
import { useUser } from "@/store/userProvider";
import WishListCardBox from "./wishListCardBox";

const MyPage: React.FC<{ isLoggedIn: Boolean }> = ({ isLoggedIn }) => {
  const { state } = useContext(WishListContext);
  const { user } = useUser();
  console.log(state);

  const items = user
    ? state.items.filter((item) => item.userId === user.id)
    : [];

  console.log(items);

  const onLogoutClick = async (): Promise<void> => {
    authService.signOut();
    alert("로그아웃 되었습니다");
  };
  return (
    <>
      <PathBar isLoggedIn={isLoggedIn} />
      <LoginContainer>
        <div>환영합니다</div>
        <div>WISHLIST</div>
        {items.map((item) => (
          <WishListCardBox key={item.itemId} item={item} />
        ))}
        <Button type="submit" onClick={onLogoutClick} width="100px">
          LOG OUT
        </Button>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MyPage;
