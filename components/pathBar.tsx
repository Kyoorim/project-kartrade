import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";

const PathBar: React.FC<{ isLoggedIn: Boolean }> = ({ isLoggedIn }) => {
  const router = useRouter();
  const isAuth = router.asPath === "/auth";
  const isCardDetail = router.asPath.includes("cards");
  return (
    <Wrapper>
      <SortingContainer>
        <Home onClick={() => router.push("/")}>Home</Home>
        <FiChevronRight />
        {isLoggedIn && isAuth && <span>My Page</span>}
        {isCardDetail && <span>Detail Page</span>}
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
