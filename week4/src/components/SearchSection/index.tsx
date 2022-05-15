import { KAKAO } from "core/api";
import { ResultList, ResultListWithAxios } from "core/types";
import { useRef, useState } from "react";
import styled from "styled-components";
import getLocation from "util/getLocation";

import InputInformation from "./InputInformation";

interface SearchSectionProps {
  handleResultList: (newResultList: ResultList[]) => void;
  handleIsLoading: (_isLoading: boolean) => void;
}

export default function SearchSection(props: SearchSectionProps) {
  const { handleResultList, handleIsLoading } = props;

  const [isRegionBasedChecked, setIsRegionBasedChecked] = useState<boolean>(false);
  const locationInputRef = useRef<HTMLInputElement>(null);

  const toggleIsRegionBasedChecked = () => {
    setIsRegionBasedChecked((prev) => !prev);
  };

  const getQueryParams = async (isRegionBasedChecked: boolean, location?: string) => {
    if (isRegionBasedChecked) {
      const myLocation = await getLocation();

      return {
        x: myLocation.x,
        y: myLocation.y,
        radius: 1000,
        query: "맥주",
      };
    } else {
      return { query: location + " " + "맥주" };
    }
  };
  const 검색하기 = async () => {
    handleIsLoading(true);

    const params = getQueryParams(isRegionBasedChecked, locationInputRef.current?.value);

    const {
      data: { documents },
    } = await KAKAO.get<ResultListWithAxios>("/search/keyword", {
      params,
    });

    handleResultList(documents);
    handleIsLoading(false);
  };

  return (
    <SearchSectionWrapper>
      <InputInformation
        locationInputRef={locationInputRef}
        isRegionBasedChecked={isRegionBasedChecked}
        onChangeRegionBasedChecked={toggleIsRegionBasedChecked}
      />
      <StButton type="button" onClick={검색하기}>
        검색하기
      </StButton>
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
