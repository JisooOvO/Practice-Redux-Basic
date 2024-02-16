import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams().id;
  const todos = useSelector((state) => state);
  const todo = todos.filter((todo) => +todo.id === +id);

  return <h1>{todo[0]?.text}</h1>;
};

export default Detail;
