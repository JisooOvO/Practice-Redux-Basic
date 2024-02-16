import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store";
import { Link } from "react-router-dom";

const Todo = ({ text, id }) => {
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={handleDispatch}>DEL</button>
      </Link>
    </li>
  );
};

export default Todo;
