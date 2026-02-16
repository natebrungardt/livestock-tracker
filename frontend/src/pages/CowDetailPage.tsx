import { useParams } from "react-router-dom";

export default function CowDetailPage() {
  const { id } = useParams();
  return <h1>Cow Detail Page for Cow ID: {id}</h1>;
}
