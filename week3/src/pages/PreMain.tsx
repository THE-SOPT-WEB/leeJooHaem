import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PreMain() {
  return (
    <MainWrapper>
      <MainHeader>킹안받는 월드컵</MainHeader>
      <div></div>
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

const StLink = styled(Link)`
  all: unset;

  height: 3rem;

  ${({ theme }) => theme.center};

  background-color: ${({ theme }) => theme.colors.lightOrange};

  &:hover {
    cursor: pointer;
  }
`;
