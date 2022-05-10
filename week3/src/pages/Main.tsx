import MainView from "components/MainView";
import nations from "nations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Nation {
  image: string;
  alt: string;
}

export default function Main() {
  const navigation = useNavigate();
  const [idxOfNations, setIdxOfNations] = useState<number>(0);
  const [winners, setWinners] = useState<Nation[]>(nations);

  // 클릭할 경우 Winners 에서 패배자 삭제 및 idx 변경
  const chooseWinnerNGoNextRound = (removingIdx: number) => {
    const prevWinnersLength = winners.length;

    setWinners((prevWinners) => {
      const winnersCopy = [...prevWinners];
      winnersCopy.splice(removingIdx, 1);
      return winnersCopy;
    });

    if (prevWinnersLength === 2) navigation("/complete", { state: winners[0] });
    else if (prevWinnersLength - 1 - idxOfNations >= 2) setIdxOfNations((prevIdx) => prevIdx + 1);
    else setIdxOfNations(0);
  };

  const mainViewProps = {
    idxOfNations,
    winners,
    chooseWinnerNGoNextRound,
  };

  return <MainView {...mainViewProps} />;
}
