import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CustomizedState {
  image: string;
  alt: string;
}

export default function Complete() {
  const navigation = useNavigate();
  const location = useLocation();
  const winnerState = location.state as CustomizedState;

  useEffect(() => {
    if (!winnerState) navigation("/");
  }, []);

  return (
    <StMainWrapper>
      <img src={winnerState?.image} alt={winnerState?.alt}></img>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  height: 100vh;
  background-color: rgb(37, 38, 37);
`;
