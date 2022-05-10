import { useState } from "react";
import styled from "styled-components";

export default function InputInformation() {
  const [isRegionBasedChecked, setIsRegionBasedChecked] = useState<boolean>(false);

  return (
    <>
      <p>
        <label htmlFor="region-based">지역 기반으로 검색할게요</label>
        <input
          type="checkbox"
          id="region-based"
          checked={isRegionBasedChecked}
          onChange={() => setIsRegionBasedChecked((prev) => !prev)}
        />
      </p>

      <label htmlFor="my-region">우리 동네는 여기에요</label>
      <StRegionInput type="text" id="my-region" disabled={isRegionBasedChecked}></StRegionInput>
    </>
  );
}

const StRegionInput = styled.input`
  margin: 0.3rem 0;
`;
