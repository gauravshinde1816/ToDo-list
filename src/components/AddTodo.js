import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import M from "materialize-css/dist/js/materialize.js";
const AddTodo = () => {
  const { addToDo } = useContext(GlobalContext);
  const [text, setText] = useState("");
  useEffect(() => {
    M.AutoInit();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
    };
    addToDo(newTodo);
    M.toast({
      html: "New To do Item is added",
      classes: "rounded #43a047 green darken-1",
    });
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row container center">
          <h3>Add New ToDo</h3>
          <div className="input-field col s12">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="text">new Todo</label>
          </div>
          <button className="waves-effect waves-light btn-large">
            Add To Do
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
