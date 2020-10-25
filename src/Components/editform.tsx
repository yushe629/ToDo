import React, { useState } from "react";
import Todo from "./Tasktype";

type Props = {
  task: Todo;
  editTaskName: (task: Todo, input: string) => void;
  editCancel: (task: Todo) => void;
};

const EditForm: React.FC<Props> = ({ task, editTaskName, editCancel }) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <li>
      <input type="text" value={input} onChange={handleInputChange} />
      <button
        onClick={() => {
          editTaskName(task, input);
        }}
      >
        変更
      </button>
      <button
        onClick={() => {
          editCancel(task);
        }}
      >
        キャンセル
      </button>
    </li>
  );
};

export default EditForm;
