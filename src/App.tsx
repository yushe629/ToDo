import React from "react";
import "./App.css";

class CreateTodoFierld extends React.Component {
  constructor(props: string) {
    super(props);
  }
}
class TodoList extends React.Component {}

class App extends React.Component {
  render() {
    return (
      <>
        <div className="CreateTodoField"></div>
        <div className="TodoList"></div>
      </>
    );
  }
}
export default App;
