import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  height: 70vh;

  display: flex;

  &:after {
    content: "VS";

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ${({ theme }) => theme.center};

    color: white;
    text-shadow: 0 0 1rem red;
    font-size: 5rem;
    font-weight: 800;

    z-index: 10;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  position: absolute;
  right: 25%;
  bottom: 40%;
  left: 25%;

  background-color: black;

  color: white;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
`;
