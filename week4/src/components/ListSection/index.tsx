import { ResultList } from "core/types";

interface ListSectionProps {
  resultList: ResultList[];
  isLoading: boolean;
}

export default function ListSection(props: ListSectionProps) {
  const { resultList, isLoading } = props;

  return <div>ListSection</div>;
}
