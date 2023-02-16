import { useContext } from "react";
import { WishListContext } from "@/store/wishListReducer";
import styled from "styled-components";
import Button from "./button";
import { authService } from "@/firebase";
import PathBar from "./pathBar";

const MyPage: React.FC<{ isLoggedIn: Boolean }> = ({ isLoggedIn }) => {
  const { state } = useContext(WishListContext);
  console.log(state);

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
        <ul>
          {state.items.map((item) => (
            <li key={item.itemId}>{item.itemId}</li>
          ))}
        </ul>
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
