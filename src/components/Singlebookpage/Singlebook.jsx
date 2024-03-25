import { useParams } from "react-router-dom";

const Singlebook = () => {
  const data = useParams();
  console.log(data);
  return <div>{data.bookId}</div>;
};

export default Singlebook;
