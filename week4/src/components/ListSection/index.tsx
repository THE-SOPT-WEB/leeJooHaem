import { ResultList } from "core/types";
import styled from "styled-components";

interface ListSectionProps {
  resultLists: ResultList[];
  isLoading: boolean;
}

export default function ListSection(props: ListSectionProps) {
  const { resultLists, isLoading } = props;

  if (isLoading) return <StResultWrapper>로딩 중🌐🦄</StResultWrapper>;
  if (resultLists.length === 0) return <StResultWrapper>결과가 없어요🤔😘</StResultWrapper>;
  return <StResultWrapper></StResultWrapper>;
}

const StResultWrapper = styled.section`
  ${({ theme }) => theme.center};
`;
