// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

/* vanilla */
import { legacy_createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// 리듀서 함수 생성
// state, action 을 인자로 받음
// initial 시 type : @@redux/INIT 액션이 최초로 실행
const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// 스토어에 리듀서 함수 전달
const countStore = legacy_createStore(countModifier);

// state 변화시 callback 함수 실행
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

// 스토어에 액션 전달
// 액션은 객체여야하며 type 프로퍼티를 가져야함
add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
