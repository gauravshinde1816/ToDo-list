import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { DELETE_TODO, ADD_TODO } from "./types";
const initialState = {
  todos: [
    {
      id: 1,
      text: "Complete the Algebra assignment",
    },
    {
      id: 2,
      text: "Complete DM case study",
    },
    {
      id: 3,
      text: "Solve DSA problem set",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //delete Todo

  const deleteToDo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  //add to do
  const addToDo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteToDo,
        addToDo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
