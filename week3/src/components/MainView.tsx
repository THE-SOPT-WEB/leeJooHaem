import styled from "styled-components";

export default function MainView() {
  return (
    <StMainWrapper>
      <StMainHeader>
        <StTitle>킹안받는 월드컵</StTitle>
        <StRound>1/1</StRound>
      </StMainHeader>
      <StMainContent>sad</StMainContent>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  height: 100vh;
  background-color: rgb(37, 38, 37);
`;

const StMainHeader = styled.header`
  height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitle = styled.p`
  flex: 1;

  ${({ theme }) => theme.center};

  color: white;
  font-size: 5rem;
`;

const StRound = styled(StTitle)``;

const StMainContent = styled.section`
  height: 70vh;
`;
