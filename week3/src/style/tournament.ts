import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  height: 70vh;

  display: flex;
  justify-content: space-evenly;

  &:before {
    content: "VS";

    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;

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

  aspect-ratio: 1 / 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
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
