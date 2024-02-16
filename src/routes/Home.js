import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store";
import Todo from "./components/Todo";

const Home = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }

  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="write to do"
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
