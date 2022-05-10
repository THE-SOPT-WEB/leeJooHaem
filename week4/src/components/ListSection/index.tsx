import { ResultList } from "core/types";
import styled from "styled-components";

import ResultListCard from "./ResultListCard";

interface ListSectionProps {
  resultLists: ResultList[];
  isLoading: boolean;
}

export default function ListSection(props: ListSectionProps) {
  const { resultLists, isLoading } = props;
  console.log(resultLists);

  if (isLoading) return <StResultWrapper>로딩 중🌐🦄</StResultWrapper>;
  if (resultLists.length === 0) return <StResultWrapper>결과가 없어요🤔😘</StResultWrapper>;
  return (
    <StResultListsWrapper>
      {resultLists.map((resultList) => (
        <ResultListCard
          key={resultList.id}
          name={resultList.place_name}
          phoneNumber={resultList.phone}
          distance={resultList.distance}
          address={resultList.address_name}
        />
      ))}
    </StResultListsWrapper>
  );
}

const StResultWrapper = styled.section`
  ${({ theme }) => theme.center};
`;

const StResultListsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
