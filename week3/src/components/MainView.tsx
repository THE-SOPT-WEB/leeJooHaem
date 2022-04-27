import { Nation } from "pages/Main";
import styled from "styled-components";

import { Tournament } from "./Tournament";

interface MainViewProps {
  idxOfNations: number;
  winners: Nation[];
  chooseWinnerNGoNextRound: (removingIdx: number) => void;
}

export default function MainView(props: MainViewProps) {
  const { idxOfNations, winners, chooseWinnerNGoNextRound } = props;

  return (
    <StMainWrapper>
      <StMainHeader>
        <StTitle>킹안받는 월드컵</StTitle>
        <StRound>1/1</StRound>
      </StMainHeader>
      <Tournament>
        <Tournament.ImageWrapper onClick={() => chooseWinnerNGoNextRound(idxOfNations + 1)}>
          <Tournament.Image src={winners[idxOfNations].image} alt={winners[idxOfNations].alt} />
          <Tournament.Title>{winners[idxOfNations].alt}</Tournament.Title>
        </Tournament.ImageWrapper>
        <Tournament.ImageWrapper onClick={() => chooseWinnerNGoNextRound(idxOfNations)}>
          <Tournament.Image src={winners[idxOfNations + 1].image} alt={winners[idxOfNations + 1].alt} />
          <Tournament.Title>{winners[idxOfNations + 1].alt}</Tournament.Title>
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
  font-size: 3rem;
`;

const StRound = styled(StTitle)``;
