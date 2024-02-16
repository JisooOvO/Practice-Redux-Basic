import { useDispatch } from "react-redux";
import { remove } from "../../store";
import { Link } from "react-router-dom";

const Todo = ({ text, id }) => {
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={handleDispatch}>DEL</button>
    </li>
  );
};

export default Todo;
