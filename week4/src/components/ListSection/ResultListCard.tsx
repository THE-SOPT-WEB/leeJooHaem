import styled from "styled-components";

interface ResultListCardProps {
  name: string;
  phoneNumber: string;
  distance: string;
  address: string;
}

export default function ResultListCard(props: ResultListCardProps) {
  const { name, phoneNumber, distance, address } = props;

  return (
    <StCardWrapper>
      <StName>{name}</StName>
      <StInfoWrapper>
        <StPhoneNumber>{phoneNumber ? phoneNumber : "❌"}</StPhoneNumber>
        <StDetail>{distance ? distance + "미터" : address}</StDetail>
      </StInfoWrapper>
    </StCardWrapper>
  );
}

const StCardWrapper = styled.article`
  width: 90%;
  height: 4rem;

  margin-top: 1rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.lightOrange};
`;

const StName = styled.strong`
  display: inline-block;

  margin: 0.5rem 0 0 0.5rem;

  font-weight: 600;
`;

const StInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0.5rem;
`;

const StPhoneNumber = styled.p`
  padding: 0.1rem;

  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.orange};
`;

const StDetail = styled.p`
  width: 50%;

  font-size: 0.8rem;

  text-align: right;
`;
