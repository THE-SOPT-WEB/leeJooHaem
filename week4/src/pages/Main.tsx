import HeaderSection from "components/HeaderSection";
import ListSection from "components/ListSection";
import SearchSection from "components/SearchSection";
import styled from "styled-components";

export default function Main() {
  return (
    <StMainContainer>
      <StMainWrapper>
        <HeaderSection />
        <SearchSection />
        <ListSection />
      </StMainWrapper>
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #565456;
`;

const StMainWrapper = styled.main`
  width: 90vw;
  max-width: 35rem;
  min-height: 90vh;

  border: 0.1rem solid #f5f5f5;
  border-radius: 1rem;
`;
