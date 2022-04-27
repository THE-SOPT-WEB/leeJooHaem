import MainView from "components/MainView";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Nation {
  image: string;
  alt: string;
}

export default function Main() {
  const navigation = useNavigate();
  const [idxOfNations, setIdxOfNations] = useState<number>(0);
  const [winners, setWinners] = useState<Nation[]>([
    {
      image: "/assets/korea.png",
      alt: "대한민국",
    },
    {
      image: "/assets/france.png",
      alt: "프랑스",
    },
    {
      image: "/assets/england.png",
      alt: "잉글랜드",
    },
    {
      image: "/assets/netherlands.png",
      alt: "네덜란드",
    },
  ]);

  // 클릭할 경우 Winners 에서 패배자 삭제 및 idx 변경
  const chooseWinnerNGoNextRound = (removingIdx: number) => {
    const prevWinnersLength = winners.length;

    setWinners((prevWinners) => {
      const winnersCopy = [...prevWinners];
      winnersCopy.splice(removingIdx, 1);
      return winnersCopy;
    });

    if (prevWinnersLength === 2) navigation("/complete", { state: winners[0] });
    else if (prevWinnersLength >= idxOfNations + 3) setIdxOfNations((prevIdx) => prevIdx + 1);
    else setIdxOfNations(0);
  };

  const mainViewProps = {
    idxOfNations,
    winners,
    chooseWinnerNGoNextRound,
  };

  return <MainView {...mainViewProps} />;
}
