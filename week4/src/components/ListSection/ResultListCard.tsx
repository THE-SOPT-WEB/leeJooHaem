interface ResultListCardProps {
  name: string;
  phoneNumber: string;
  distance: string;
}

export default function ResultListCard(props: ResultListCardProps) {
  const { name, phoneNumber, distance } = props;

  return <article>ResultListCard</article>;
}
