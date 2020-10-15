import React from "react";
import "../App.css";
import Todo from "./Tasktype";

class CreateTodoField extends React.Component<{
  onTodoAdd: (todo: Todo) => void;
}> {
  state = {
    inputData: "",
    count: 0,
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
        <button
          onClick={() => {
            this.setState({ count: this.state.count++ });
            this.props.onTodoAdd({
              id: this.state.count,
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

export default CreateTodoField;
