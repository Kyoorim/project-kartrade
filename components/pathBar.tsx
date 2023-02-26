import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { useUser } from "@/store/userReducer";

const PathBar = () => {
  const { isLoggedIn } = useUser();

  const router = useRouter();
  const path = router.asPath;

  const routes = {
    isAuth: path === "/auth",
    isCardDetail: path.includes("cards"),
    isWishList: path === "/wishlist",
  };

  // const isAuth = router.asPath === "/auth";
  // const isCardDetail = router.asPath.includes("cards");
  // const isWishList = router.asPath === "/wishlist";
  return (
    <Wrapper>
      <SortingContainer>
        <Home onClick={() => router.push("/")}>Home</Home>
        <FiChevronRight />
        {isLoggedIn && routes.isAuth && <span>My Page</span>}
        {routes.isCardDetail && <span>Detail Page</span>}
        {routes.isWishList && <span>Wish List</span>}
      </SortingContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 1em 1.5em;

  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const SortingContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-size: 0.8rem;
  }
`;

const Home = styled.span`
  color: #777777;
  cursor: pointer;
`;

export default PathBar;
