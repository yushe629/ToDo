import React from "react";
import "./App.css";

class CreateTodoFierld extends React.Component {
  state = {
    inputData: "",
  };
  render() {
    return (
      <div>
        <input
          value={this.state.inputData}
          onChange={(e) => {
            this.setState({ inputData: e.target.value });
          }}
        />
        <p>あなたは{this.state.inputData}と入力しました。</p>
      </div>
    );
  }
}
class TodoList extends React.Component {}

class App extends React.Component {
  render() {
    return (
      <>
        <CreateTodoFierld />
        <TodoList />
      </>
    );
  }
}
export default App;
