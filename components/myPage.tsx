import styled from "styled-components";
import Button from "./button";
import { authService } from "@/firebase";
import PathBar from "./pathBar";

const MyPage: React.FC<{ isLoggedIn: Boolean }> = ({ isLoggedIn }) => {
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
        <Button type="submit" onClick={onLogoutClick}>
          LOG OUT
        </Button>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  margin-top: 50px;
`;

export default MyPage;
