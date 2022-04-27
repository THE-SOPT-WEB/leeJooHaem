import MainView from "components/MainView";

export default function Main() {
  const nations = [
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
  ];

  const mainViewProps = {
    nations,
  };

  return <MainView />;
}
