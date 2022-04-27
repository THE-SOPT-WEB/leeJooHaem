import styled from "styled-components";

import { Tournament } from "./Tournament";

export default function MainView() {
  return (
    <StMainWrapper>
      <StMainHeader>
        <StTitle>킹안받는 월드컵</StTitle>
        <StRound>1/1</StRound>
      </StMainHeader>
      <Tournament>
        <Tournament.ImageWrapper>
          <Tournament.Image src="" alt="" />
          <Tournament.Title>{"네덜란드"}</Tournament.Title>
        </Tournament.ImageWrapper>
        {/* <Tournament.VS>VS</Tournament.VS>  */}
        <Tournament.ImageWrapper>
          <Tournament.Image src="" alt="" />
          <Tournament.Title>{"대한민국"}</Tournament.Title>
        </Tournament.ImageWrapper>
      </Tournament>
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

const StTitle = styled.h1`
  flex: 1;

  ${({ theme }) => theme.center};

  color: white;
  font-size: 5rem;
`;

const StRound = styled(StTitle)``;
