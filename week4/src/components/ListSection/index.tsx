import { ResultList } from "core/types";
import styled from "styled-components";

interface ListSectionProps {
  resultList: ResultList[];
  isLoading: boolean;
}

export default function ListSection(props: ListSectionProps) {
  const { resultList, isLoading } = props;

  if (isLoading) return <StResultWrapper>로딩 중🌐🦄</StResultWrapper>;
  if (resultList.length === 0) return <StResultWrapper>결과가 없어요🤔😘</StResultWrapper>;
  return <div>ListSection</div>;
}

const StResultWrapper = styled.section`
  ${({ theme }) => theme.center};
`;
