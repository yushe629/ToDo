import React from "react";
import "../App.css";
import Todo from "./Tasktype";

class EditTask extends React.Component<{
  onTodoEdit: (todo: Todo) => void;
  index: number;
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
        <button
          onClick={() => {
            this.props.onTodoEdit({
              id: this.props.index,
              task: this.state.inputData,
              complete: false,
            });
            this.setState({ inputData: "" });
          }}
        />
      </div>
    );
  }
}

export default EditTask;
