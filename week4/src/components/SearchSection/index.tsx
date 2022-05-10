import styled from "styled-components";

export default function SearchSection() {
  return (
    <SearchSectionWrapper>
      <p>
        <label htmlFor="region-based">지역 기반으로 검색할게요</label>
        <input type="checkbox" id="region-based" />
      </p>
      <label htmlFor="my-region">우리 동네는 여기에요</label>
      <StRegionInput type="text" id="my-region"></StRegionInput>
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

const StRegionInput = styled.input`
  margin: 0.3rem 0;
`;

const StButton = styled.button`
  border-radius: 0.6rem;
`;
