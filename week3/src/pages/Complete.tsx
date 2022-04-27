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
      <StImgWrapper>
        <StCrownImg src="/assets/crown.png" alt="왕관" />
        <img src={winnerState.image} alt={winnerState.alt} />
      </StImgWrapper>
      <StContent>
        {winnerState.alt} 우승!
        <button type="button" onClick={() => navigation("/")}>
          다시하기
        </button>
        <button type="button">공유하기</button>
      </StContent>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  height: 100vh;
  background-color: rgb(37, 38, 37);
`;

const StImgWrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.center};
`;
const StCrownImg = styled.img`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 20rem;
`;

const StContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  font-size: 3rem;
`;
