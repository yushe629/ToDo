import React, { useState } from 'react'
import Todo from './Tasktype'
 
type Props = {
    task:Todo,
    Edit: (task: Todo,input:string) => void,
    Editcancel:(task:Todo) => void
}

const EditForm :React.FC<Props> = ({task,Edit,Editcancel}) => {

  const [input, setInput] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
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
          onClick={() => {Edit(task,input)}}
        >
                変更
        </button>
            <button
          onClick={() => { Editcancel(task) }}>
                キャンセル
            </button>
      </div>
    );
  }


export default EditForm