import styled from "styled-components";

export default function PreMain() {
  return (
    <MainWrapper>
      <MainHeader>asd</MainHeader>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.orange};
`;
