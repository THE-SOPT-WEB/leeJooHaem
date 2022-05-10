import HeaderSection from "components/HeaderSection";
import ListSection from "components/ListSection";
import SearchSection from "components/SearchSection";
import { ResultList } from "core/types";
import { useState } from "react";
import styled from "styled-components";

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultLists, setResultLists] = useState<ResultList[]>([]);

  const handleIsLoading = (_isLoading: boolean) => {
    setIsLoading(_isLoading);
  };

  const handleResultList = (newResultList: ResultList[]) => {
    setResultLists(newResultList);
  };

  return (
    <StMainContainer>
      <StMainWrapper>
        <HeaderSection />
        <SearchSection handleResultList={handleResultList} handleIsLoading={handleIsLoading} />
        <ListSection resultLists={resultLists} isLoading={isLoading} />
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

  display: flex;
  flex-direction: column;
  & > section:last-child {
    flex: 1;
  }

  border: 0.1rem solid #f5f5f5;
  border-radius: 1rem;
`;
