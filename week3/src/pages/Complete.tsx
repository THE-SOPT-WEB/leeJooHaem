import { useLocation } from "react-router-dom";

export default function Complete() {
  const { state } = useLocation();
  console.log(state);

  return <div>Complete</div>;
}
