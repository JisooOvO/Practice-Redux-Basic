import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 와 store 연결
  <Provider store={store}>
    <App />
  </Provider>,
);

/* vanilla */

/* 1. count */
// import { legacy_createStore } from "redux";

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const number = document.querySelector("#number");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// // 리듀서 함수 생성
// // state, action 을 인자로 받음
// // initial 시 type : @@redux/INIT 액션이 최초로 실행
// const countModifier = (count = 0, action) => {
//   console.log(count, action);
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// // 스토어에 리듀서 함수 전달
// const countStore = legacy_createStore(countModifier);

// // state 변화시 callback 함수 실행
// countStore.subscribe(() => {
//   number.innerText = countStore.getState();
// });

// // 스토어에 액션 전달
// // 액션은 객체여야하며 type 프로퍼티를 가져야함
// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS });
// });

/* 2. todo */
// import { legacy_createStore } from "redux";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// // NEVER MUTATE STATE
// const reducer = (state = [], action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD_TODO:
//       // push 금지
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE_TODO:
//       return state.filter((item) => item.id !== +action.id);
//     default:
//       return state;
//   }
// };

// const store = legacy_createStore(reducer);

// const addTodo = (text) => {
//   store.dispatch({ type: ADD_TODO, text });
// };

// const deleteTodo = (event) => {
//   const id = event.target.parentNode.id;
//   store.dispatch({ type: DELETE_TODO, id });
// };

// store.subscribe(() => {
//   const toDos = store.getState();
//   console.log(toDos);
//   ul.innerHTML = "";
//   toDos.forEach((todo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", deleteTodo);
//     li.id = todo.id;
//     li.innerText = todo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// });

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   addTodo(toDo);
// };

// form.addEventListener("submit", onSubmit);
