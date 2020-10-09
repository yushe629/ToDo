import React from "react";
import "./App.css";

interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

class CreateTodoField extends React.Component<{
  onTodoAdd: (todo: Todo) => void;
}> {
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
        <button
          onClick={() => {
            this.props.onTodoAdd({
              id: Math.floor(Math.random() * 100),
              task: this.state.inputData,
              complete: false,
            });
          }}
        >
          追加
        </button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        task: "初めてのタスク",
        achieve: true,
      },

      {
        id: 2,
        task: "2つめのタスク",
        achieve: true,
      },
    ],
  };
  render() {
    return (
      <div>
        <CreateTodoField
          onTodoAdd={(todo) => {
            this.setState({
              todos: [...this.state.todos, todo],
            });
          }}
        />
        <p>
          {" "}
          <ul>
            {this.state.todos.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <TodoList />;
  }
}
export default App;
