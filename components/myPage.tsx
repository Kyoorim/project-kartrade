import styled from "styled-components";
import Button from "./button";
import { authService } from "@/firebase";
import PathBar from "./pathBar";
import { useUser } from "@/store/userReducer";
import Heading from "./heading/header";

const MyPage = () => {
  const { userObj } = useUser();
  const onLogoutClick = async (): Promise<void> => {
    authService.signOut();
    alert("로그아웃 되었습니다");
  };
  return (
    <>
      <PathBar />
      <MainContainer>
        <LoginContainer>
          <Heading level={4} mb={10} color="#777777">
            Welcome
          </Heading>
          {userObj?.name ? (
            <div>{userObj?.name}</div>
          ) : (
            <div>{userObj?.email}</div>
          )}
        </LoginContainer>
        <Button type="submit" onClick={onLogoutClick} width="100px">
          LOG OUT
        </Button>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export default MyPage;
