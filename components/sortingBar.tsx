import styled from "styled-components";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";

const SortingBar = () => {
  const { asPath } = useRouter();

  return (
    <Wrapper>
      {asPath.slice(1, 6) === "cards" ? (
        <SortingContainer>
          <Home>Home</Home>
          <FiChevronRight />
          <span>Detail Page</span>
        </SortingContainer>
      ) : (
        <>
          {/*<SortingContainer>*/}
          {/*  <span>Sort By</span> <FiChevronDown />*/}
          {/*</SortingContainer>*/}
          <PriceContainer>
            <span>Price ($)</span> <FiChevronDown />
          </PriceContainer>
        </>
      )}
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

const PriceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Home = styled.span`
  color: #777777;
`;

export default SortingBar;
