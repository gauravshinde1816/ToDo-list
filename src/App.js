import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { GlobalProvider } from "./components/context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <br />
        <TodoList />
        <br />
        <AddTodo />
      </div>
    </GlobalProvider>
  );
};

export default App;
