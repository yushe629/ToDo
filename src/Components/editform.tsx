import React, { useState } from 'react'
import Todo from './Tasktype'
 
type Props = {
    task:Todo,
    Edit: (task: Todo) => void
}

const EditForm :React.FC<Props> = ({task,Edit}) => {

  const [input, setInput] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleChange = () => {
    task.task = input;
    setInput("")

  }

    return (
      <div>
        <input
            type="text"
                        className="input"
                        value={input}
                        onChange={handleInputChange}
        />
        <button
          onClick={() => {handleChange}}
        >
                変更
        </button>
            <button
                onClick={() => {task.editting = false}}>
                キャンセル
            </button>
      </div>
    );
  }


export default EditForm