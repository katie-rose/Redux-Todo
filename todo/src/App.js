import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
