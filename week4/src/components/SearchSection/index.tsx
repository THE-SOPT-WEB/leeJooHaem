import { KAKAO } from "core/api";
import { ResultList, ResultListWithAxios } from "core/types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import getLocation from "util/getLocation";

import InputInformation from "./InputInformation";

interface SearchSectionProps {
  handleResultList: (newResultList: ResultList[]) => void;
}

export default function SearchSection(props: SearchSectionProps) {
  const { handleResultList } = props;

  const [isRegionBasedChecked, setIsRegionBasedChecked] = useState<boolean>(false);
  const locationInputRef = useRef<HTMLInputElement>(null);

  const toggleIsRegionBasedChecked = () => {
    setIsRegionBasedChecked((prev) => !prev);
  };

  const 특정지역맥주집가져오기 = async (location = "") => {
    const {
      data: { documents },
    } = await KAKAO.get<ResultListWithAxios>("/search/keyword", {
      params: {
        query: location + " " + "맥주",
      },
    });

    handleResultList(documents);
  };

  useEffect(() => {
    async function 위치가져오기() {
      const result = await getLocation();

      console.log(result);
    }

    위치가져오기();
  }, []);

  return (
    <SearchSectionWrapper>
      <InputInformation
        locationInputRef={locationInputRef}
        isRegionBasedChecked={isRegionBasedChecked}
        onChangeRegionBasedChecked={toggleIsRegionBasedChecked}
      />
      <StButton type="button" onClick={() => 특정지역맥주집가져오기(locationInputRef.current?.value)}>
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
