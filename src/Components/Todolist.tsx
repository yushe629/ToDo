import React from "react";
import "../App.css";
import Todo from "./Tasktype";
import CreateTodoField from "./CreateTodoField";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        task: "初めてのタスク",
        complete: true,
      },

      {
        id: 2,
        task: "2つめのタスク",
        complete: true,
      },
    ],
  };

  delete(todo: Todo) {
    this.setState({
      todos: this.state.todos.filter((x) => {
        x.id !== todo.id;
      }),
    });
    return 0;
  }

  render() {
    return (
      <div>
        <CreateTodoField
          count={this.state.todos.length}
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
              <li key={todo.id}>
                {todo.task}
                <button key={todo.id} onClick={() => {}}>
                  編集
                </button>
                <button key={todo.id} onClick={() => this.delete(todo)}>
                  完了
                </button>
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}
export default TodoList;
