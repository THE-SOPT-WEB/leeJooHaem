import styled from "styled-components";

export default function HeaderSection() {
  return <StHeaderSection>동네 킹주집 함가보자</StHeaderSection>;
}

const StHeaderSection = styled.section`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 0.1rem solid #f5f5f5;

  color: #c0c46a;
  font-size: 1.5rem;
  font-weight: 600;
`;
