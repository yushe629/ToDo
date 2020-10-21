import React from 'react'
import Todo  from './Tasktype'
 
type Props = {
    task: Todo
    handleDone: (task: Todo) => void
    handleDelete: (task: Todo) => void
}
 
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
 
    return (
        <li className={task.complete ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => handleDone(task)}
                    defaultChecked={task.complete}
                />
                <span className="checkbox-label">{ task.task }</span>
            </label>
            <button
                onClick={() => handleDelete(task)}
                className="btn is-delete"
            >削除</button>
        </li>
    )
}
 
export default TaskItem