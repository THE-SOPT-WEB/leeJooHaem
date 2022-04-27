import MainView from "components/MainView";
import { useState } from "react";

export interface Nation {
  image: string;
  alt: string;
}

export default function Main() {
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

  const mainViewProps = {
    idxOfNations,
    winners,
  };

  return <MainView {...mainViewProps} />;
}
