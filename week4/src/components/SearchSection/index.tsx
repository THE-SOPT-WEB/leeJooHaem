import { KAKAO } from "core/api";
import { ResultList, ResultListWithAxios } from "core/types";
import styled from "styled-components";

import InputInformation from "./InputInformation";

interface SearchSectionProps {
  handleResultList: (newResultList: ResultList[]) => void;
}

export default function SearchSection(props: SearchSectionProps) {
  const { handleResultList } = props;

  const 특정지역맥주집가져오기 = async (location: string) => {
    const {
      data: { documents },
    } = await KAKAO.get<ResultListWithAxios>("/search/keyword", {
      params: {
        query: location + " " + "맥주",
      },
    });

    handleResultList(documents);
  };

  return (
    <SearchSectionWrapper>
      <InputInformation />
      <StButton type="button">검색하기</StButton>
    </SearchSectionWrapper>
  );
}

const SearchSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0;

  border-bottom: 0.1rem solid #f5f5f5;

  color: #f5f5f5;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const StButton = styled.button`
  border-radius: 0.6rem;
`;