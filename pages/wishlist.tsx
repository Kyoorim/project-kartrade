import styled from "styled-components";
import { useContext } from "react";
import { WishListContext } from "@/store/wishListReducer";
import { useUser } from "@/store/userReducer";
import Nav from "@/components/nav";
import WishListCardBox from "@/components/wishListCardBox";
import PathBar from "@/components/pathBar";

const WishList = () => {
  const { state } = useContext(WishListContext);
  const { isLoggedIn } = useUser();

  const items = state.items;

  return (
    <BgWrapper>
      <Main>
        <Nav />
        <PathBar title={'Wish List'} />
        <ContentContainer>
          {isLoggedIn ? (
            <>
              {items.map((item) => (
                <WishListCardBox key={item.itemId} item={item} />
              ))}
            </>
          ) : (
            <>로그인 해주세요</>
          )}
        </ContentContainer>
      </Main>
    </BgWrapper>
  );
};

const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  background-color: #e2e1e1;
  display: flex;
  flex-direction: column;
  background-size: 400px;
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position-x: 15%;
  background-position-y: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.section`
  background-color: white;
  position: relative;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    position: relative;
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    margin: 0 0 0 calc(50% - 1px);
    zoom: 1.25;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export default WishList;
