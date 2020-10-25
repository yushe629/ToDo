import React from "react";
import Todo from "./Tasktype";

type Props = {
  task: Todo;
  handleDone: (task: Todo, complete: boolean) => void;
  handleDelete: (task: Todo) => void;
  handleEdit: (task: Todo) => void;
};

const TaskItem: React.FC<Props> = ({
  task,
  handleDone,
  handleDelete,
  handleEdit,
}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.complete}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDone(task, e.target.checked)
          }
        />
        <span>{task.name}</span>
      </label>
      <button onClick={() => handleEdit(task)}>編集</button>
      <button onClick={() => handleDelete(task)}>削除</button>
    </li>
  );
};

export default TaskItem;
