import HeaderSection from "components/HeaderSection";
import ListSection from "components/ListSection";
import SearchSection from "components/SearchSection";
import styled from "styled-components";

export default function Main() {
  return (
    <StMainContainer>
      <HeaderSection />
      <SearchSection />
      <ListSection />
    </StMainContainer>
  );
}

const StMainContainer = styled.main``;
