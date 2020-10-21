import React from 'react'
import Todo  from './Tasktype'
 
type Props = {
    task:Todo,
    Edit: (task: Todo) => void
}

class EditForm extends React.Component<Props>{

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
            this.props.Edit({
              id: this.props.task.id,
              task: this.state.inputData,
              complete: false,
              editting:false
            });
          }}
        >
                変更
        </button>
            <button
                onClick={() => {}}>
                キャンセル
            </button>
      </div>
    );
  }


}

export default EditForm