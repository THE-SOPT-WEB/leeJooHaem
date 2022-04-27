import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function PreMain() {
  return (
    <MainWrapper>
      <MainHeader>킹안받는 진짜 월드컵</MainHeader>
      <StAniBall></StAniBall>
      <StLink to="/king">시작할람하고</StLink>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};
`;

const MainHeader = styled.header`
  width: 100%;
  height: 10rem;

  ${({ theme }) => theme.center};

  background-color: ${({ theme }) => theme.colors.orange};

  color: ${({ theme }) => theme.colors.black};
  font-size: 5rem;
  font-weight: 800;

  ${({ theme }) => theme.shadow};
`;

const aniBall = keyframes`
    0% {
      transform: translateY(-5rem);
    }
    50% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(-5rem);
    }
  `;

const StAniBall = styled.div`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  background-color: white;

  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${aniBall};
`;

const StLink = styled(Link)`
  all: unset;

  width: 9rem;
  height: 3rem;

  ${({ theme }) => theme.center};

  background-color: ${({ theme }) => theme.colors.lightOrange};

  &:hover {
    cursor: pointer;
  }
`;
