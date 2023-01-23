import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const SortingBar = () => {
  return (
    <Wrapper>
      <SortingContainer>
        Sort By <FiChevronDown />
      </SortingContainer>
      <PriceContainer>
        Price ($) <FiChevronDown />
      </PriceContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
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
  font-size: 0.8rem;
`;

const PriceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

export default SortingBar;
