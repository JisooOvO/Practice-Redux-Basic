import { legacy_createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) => {
      return state.filter((todo) => +todo.id !== +action.payload);
    },
  },
});

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({ id: Date.now(), text: action.payload });
//     })
//     .addCase(deleteToDo, (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload);
//     });
// });

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   };
// };

// createAction 은 payload 를 프로퍼티로 지님
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((item) => item.id !== +action.payload);
//     default:
//       return state;
//   }
// };

export const { add, remove } = todo.actions;

const store = configureStore({ reducer: todo.reducer });
//const store = legacy_createStore(reducer);

export default store;
