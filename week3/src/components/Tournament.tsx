import { Container, Image, ImageWrapper, Title } from "style/tournament";

interface TournamentProps {
  children: React.ReactNode;
}

interface TournamentImageWrapperProps {
  children: React.ReactNode;
  onClick: () => void;
}

interface TournamentImageProps {
  src: string;
  alt: string;
}

export function Tournament({ children, ...restProps }: TournamentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Tournament.ImageWrapper = function TournamentImageWrapper({ children, ...restProps }: TournamentImageWrapperProps) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

Tournament.Image = function TournamentImage({ ...restProps }: TournamentImageProps) {
  return <Image {...restProps} />;
};

Tournament.Title = function TournamentTitle({ children, ...restProps }: TournamentProps) {
  return <Title {...restProps}>{children}</Title>;
};
