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

class TodoList extends React.Component {
  task1 = {
    id: 1,
    task: "初めてのタスク",
    achieve: true,
  };

  task2 = {
    id: 2,
    task: "2つめのタスク",
    achieve: true,
  };

  tasks = [this.task1, this.task2];

  render() {
    return <div>{this.tasks.map((x) => console.log(x.task))}</div>;
  }
}

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
