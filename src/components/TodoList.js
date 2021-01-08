import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { GlobalContext } from "./context/GlobalState";
const TodoList = () => {
  const { todos } = useContext(GlobalContext);

  return (
    <div className="container">
      <ul></ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
