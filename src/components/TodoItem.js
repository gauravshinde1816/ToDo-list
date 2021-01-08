import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import M from "materialize-css/dist/js/materialize.js";
const TodoItem = ({ todo }) => {
  const { deleteToDo } = useContext(GlobalContext);
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="container">
      <ul className="collection">
        <li className="collection-item">
          {todo.text}{" "}
          <i
            style={{ cursor: "pointer" }}
            className="fa fa-trash secondary-content"
            aria-hidden="true"
            onClick={() => {
              deleteToDo(todo.id);
              M.toast({
                html: "ToDo item deleted",
                classes: "rounded #ff5252 red accent-2",
              });
            }}
          ></i>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
