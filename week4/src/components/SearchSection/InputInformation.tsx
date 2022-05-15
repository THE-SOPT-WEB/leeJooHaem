import styled from "styled-components";

interface InputInformationProps {
  locationInputRef: React.MutableRefObject<HTMLInputElement | null>;
  isRegionBasedChecked: boolean;
  onChangeRegionBasedChecked: () => void;
}

export default function InputInformation(props: InputInformationProps) {
  const { locationInputRef, isRegionBasedChecked, onChangeRegionBasedChecked } = props;
  return (
    <>
      <p>
        <label htmlFor="region-based">지역 기반으로 검색할게요</label>
        <input type="checkbox" id="region-based" checked={isRegionBasedChecked} onChange={onChangeRegionBasedChecked} />
      </p>

      <label htmlFor="my-region">우리 동네는 여기에요</label>
      <StRegionInput type="text" id="my-region" ref={locationInputRef} disabled={isRegionBasedChecked} />
    </>
  );
}

const StRegionInput = styled.input`
  margin: 0.3rem 0;
`;
